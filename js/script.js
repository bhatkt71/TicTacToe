previousstate='O';
count = 0;

Xwon=0;
Owon = 0;
Draw = 0;
                
                
        function setvalues()
        {
            document.getElementById('inputx').value=Xwon;
            document.getElementById('input0').value=Owon;
            document.getElementById('inputdraw').value=Draw;
            document.getElementById('inputtotal').value=Xwon+Owon+Draw;
        }
    
        function fun(i)
        {   
            count=count+1;
          
                arr=document.getElementsByClassName("all");

               if(previousstate== 'O')
                        {
                         arr[i].innerText='X';
                        previousstate='X';
                         }
                else
                        {
                            arr[i].innerText='O';
                            previousstate='O';
                        }
                arr[i].disabled=true;
                checkgamestatus();
                
        }
        
        function checkgamestatus()
        
        {
            arr=document.getElementsByClassName("all");
            if
            (
                (
                arr[0].innerText=='X' && 
                arr[1].innerText=='X' && 
                arr[2].innerText=='X'
                )
                ||
                (
                arr[3].innerText=='X' && 
                arr[4].innerText=='X' && 
                arr[5].innerText=='X'
                )
                ||
                (
                arr[6].innerText=='X' && 
                arr[7].innerText=='X' && 
                arr[8].innerText=='X'
                )
                ||

                (
                arr[0].innerText=='X' && 
                arr[3].innerText=='X' && 
                arr[6].innerText=='X'
                )

                ||

                (
                arr[1].innerText=='X' && 
                arr[4].innerText=='X' && 
                arr[7].innerText=='X'
                )

                ||

                (
                arr[2].innerText=='X' && 
                arr[5].innerText=='X' && 
                arr[8].innerText=='X'
                )
                ||

                (
                arr[0].innerText=='X' && 
                arr[4].innerText=='X' && 
                arr[8].innerText=='X'
                )

                ||

                (
                arr[2].innerText=='X' && 
                arr[4].innerText=='X' && 
                arr[6].innerText=='X'
                )
            )
                 {
                    alert("X won");
                    Xwon++;
                    disableall();
                    setvalues();
                 }
            else if
                (
                (
                arr[0].innerText=='O' && 
                arr[1].innerText=='O' && 
                arr[2].innerText=='O'
                )
                ||
                (
                arr[3].innerText=='O' && 
                arr[4].innerText=='O' && 
                arr[5].innerText=='O'
                )
                ||
                (
                arr[6].innerText=='O' && 
                arr[7].innerText=='O' && 
                arr[8].innerText=='O'
                )
                ||

                (
                arr[0].innerText=='O' && 
                arr[3].innerText=='O' && 
                arr[6].innerText=='O'
                )

                ||

                (
                arr[1].innerText=='O' && 
                arr[4].innerText=='O' && 
                arr[7].innerText=='O'
                )

                ||

                (
                arr[2].innerText=='O' && 
                arr[5].innerText=='O' && 
                arr[8].innerText=='O'
                )
                ||

                (
                arr[0].innerText=='O' && 
                arr[4].innerText=='O' && 
                arr[8].innerText=='O'
                )

                ||

                (
                arr[2].innerText=='O' && 
                arr[4].innerText=='O' && 
                arr[6].innerText=='O'
                )
            )

                {
                    alert("O won");
                    Owon++;
                    disableall();
                    setvalues();
                
                }
            else if(count == 9)
                           {  
                            alert("Draw")
                            Draw++;
                            disableall();
                            setvalues();
                      
                           }
        }
        function resetgame()
        {
            previousstate='O';
            count=0;


            arr=document.getElementsByClassName("all");
            for(i=0; i<9; i++)
            {
                arr[i].innerText='';
                arr[i].disabled='';
            }
        }
        function disableall()
        {
            arr=document.getElementsByClassName("all");
            for(i=0;i<9;i++)
            {

                arr[i].disabled=true;
            }
        }
        
