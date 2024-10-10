import { useEffect } from "react";

const UnityComponent = () => {
  useEffect(() => {
    // // 加载Unity WebGL项目的构建
    // const script = document.createElement("script");
    // script.src = "/Unity_build/Build/TestExport.loader.js"; // 确保路径正确
    // //sampleWebsite\public\Unity_build\Build\TestExport.loader.js 这是loader的相对路径
    // script.async = true;

    // // Unity loader脚本成功加载时初始化Unity实例
    // script.onload = () => {
    //   console.log("Unity loader script loaded successfully.");
    //   const buildUrl = "/Unity_build/Build";
    //   const config = {
    //     dataUrl: `${buildUrl}/TestExport.data`,
    //     frameworkUrl: `${buildUrl}/TestExport.framework.js`,
    //     codeUrl: `${buildUrl}/TestExport.wasm`,
    //     streamingAssetsUrl: "StreamingAssets",
    //     companyName: "Your Company",
    //     productName: "Your Product",
    //     productVersion: "1.0",
    //   };

    //   // 初始化Unity实例并将其渲染到unityContainer中
    //   createUnityInstance(document.querySelector("#unityContainer"), config)
    //     .then((unityInstance) => {
    //       console.log("Unity instance created successfully:", unityInstance);
    //     })
    //     .catch((err) => {
    //       console.error("Failed to create Unity instance:", err);
    //     });
    // };

    // script.onerror = () => {
    //   console.error("Failed to load the Unity loader script.");
    // };

    // document.body.appendChild(script);
    

    // return () => {
    //   // console.log("Cleaning up Unity loader script...");
    //   // document.body.removeChild(script);
      
    // };
  }, []);

  return (
    // <div>
    //   {/* Unity WebGL项目的容器 */}
    //   <div
    //     id="unityContainer"
    //     style={{ width: "1080px", height: "1920px" }}
    //   ></div>
    // </div>
    <>
    <canvas id="unity-canvas" width=1080 height=1920 tabindex="-1" style="width: 1080px; height: 1920px; background: #231F20"></canvas>
    <script src="Build/TestExport.loader.js"></script>
    <script>
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Mobile device style: fill the whole browser client area with the game canvas:
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[0].appendChild(meta);

        var canvas = document.querySelector("#unity-canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.position = "fixed";

        document.body.style.textAlign = "left";
      }

      createUnityInstance(document.querySelector("#unity-canvas"), {
        dataUrl: "Build/TestExport.data",
        frameworkUrl: "Build/TestExport.framework.js",
        codeUrl: "Build/TestExport.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Acupuncture",
        productVersion: "0.1",
        // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
        // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
      });
    </script>
    </>
  );
};

export default UnityComponent;
