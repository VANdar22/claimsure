import { useRef, useEffect } from "react";

export default function DarkVeil() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) return;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    // ===== Vertex Shader =====
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // ===== Fragment Shader (Blue Waves) =====
    const fragmentShaderSource = `
      precision mediump float;

      uniform vec2 u_resolution;
      uniform float u_time;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;

        // Wave pattern
        float wave1 = sin(uv.x * 12.0 + u_time * 1.5) * 0.03;
        float wave2 = cos(uv.x * 8.0 + u_time) * 0.03;

        float combinedWave = wave1 + wave2;

        // White wave color
        vec3 waveColor = vec3(1.0, 1.0, 1.0);

        // Create glowing wave line at the bottom
        float wavePosition = 0.9; // Position wave near the bottom (0.0 is top, 1.0 is bottom)
        float lineThickness = 0.05;
        float line = smoothstep(wavePosition - lineThickness + combinedWave, 
                              wavePosition - lineThickness/2.0 + combinedWave, 
                              1.0 - uv.y)
                   - smoothstep(wavePosition - lineThickness/2.0 + combinedWave, 
                              wavePosition + combinedWave, 
                              1.0 - uv.y);

        // Blue background with white wave
        vec3 color = vec3(0.0, 0.2, 0.8); // blue background
        color += waveColor * line * 1.8;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1,-1, 1,-1, -1,1,
        -1,1, 1,-1, 1,1
      ]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let start = performance.now();

    const render = () => {
      let time = (performance.now() - start) / 1000;

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time);

      gl.clearColor(1, 1, 1, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block bg-white"
    />
  );
}
