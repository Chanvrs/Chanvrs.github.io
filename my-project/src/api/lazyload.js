const lazyloading = function() {
        var imgArray = Array.from(document.querySelectorAll(".lazy"));
        // if(imgArray.length!=0)console.log(imgArray);
        var scrollTop = document.documentElement.scrollTop;
        var clientHeight = window.innerHeight;
        var loadedIndex=[];
        for(let i=0;i<imgArray.length;i++){
            let img=imgArray[i];
            if(img.offsetTop-scrollTop<clientHeight){
                img.src=img.getAttribute("data-src");
                console.log(img.src)
                // console.log("img "+img.src.substring(img.src.lastIndexOf("/")+1)+"display.");
                loadedIndex.unshift(i);//这里不能用push，因为删除的时候先要删除后面的，再删除前面的，否则Array删除了前面的，后面的就会自动覆盖到前面来。
            }
        }
    }

export default lazyloading;