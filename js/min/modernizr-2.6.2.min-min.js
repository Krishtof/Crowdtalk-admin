function leaveInput(t){t.value.length>0?t.classList.contains("active")||t.classList.add("active"):t.classList.contains("active")&&t.classList.remove("active")}for(var inputs=document.getElementsByClassName("m-input"),i=0;i<inputs.length;i++){var el=inputs[i];el.addEventListener("blur",function(){leaveInput(this)})}