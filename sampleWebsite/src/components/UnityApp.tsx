import { useEffect } from "react";

const UnityApp = () => {
  useEffect(() => {
    const loadUnityScript = () => {
      const script = document.createElement("script");
      script.src = "/Unity_build/Build/TestExport.loader.js"; // 确保路径正确
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // 检查设备类型并调整样式
        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          var meta = document.createElement("meta");
          meta.name = "viewport";
          meta.content =
            "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
          document.getElementsByTagName("head")[0].appendChild(meta);

          const canvas = document.querySelector(
            "#unity-canvas"
          )! as HTMLCanvasElement;
          canvas.style.width = "100%";
          canvas.style.height = "100%";
          canvas.style.position = "fixed";

          document.body.style.textAlign = "left";
        }

        // 调用 Unity 的 createUnityInstance
        createUnityInstance(document.querySelector("#unity-canvas"), {
          dataUrl: "Unity_build/Build/TestExport.data",
          frameworkUrl: "Unity_build/Build/TestExport.framework.js",
          codeUrl: "Unity_build/Build/TestExport.wasm",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "DefaultCompany",
          productName: "Acupuncture",
          productVersion: "0.1",
          // matchWebGLToCanvasSize: false, // 如果需要单独控制WebGL画布渲染大小，可以启用这行。
          // devicePixelRatio: 1, // 如果要覆盖高DPI设备的低DPI渲染，可以启用这行。
        });
      };

      script.onerror = () => {
        console.error("Failed to load Unity loader script.");
      };
    };

    loadUnityScript();

    return () => {
      // 清理加载的Unity脚本
      const script = document.querySelector(
        'script[src="/Build/TestExport.loader.js"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <canvas
        id="unity-canvas"
        width="1080"
        height="1920"
        tabIndex={-1}
        style={{ width: "1080px", height: "1920px", background: "#231F20" }}
      ></canvas>
    </div>
  );
};

export default UnityApp;
