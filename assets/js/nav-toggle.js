var toggle=0;
        function nav_toggle(){
            if(toggle==0)
            {
                document.getElementById('navbar-item-toggle').style.display="none";
                toggle=1;
            }
            else
            {
                document.getElementById('navbar-item-toggle').style.display="";
                toggle=0;
            }
    }