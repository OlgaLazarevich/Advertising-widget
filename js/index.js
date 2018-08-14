"use strict"

window.onload = function() {    
   
    setTimeout(function() {
    
        var arr = [
            {'title' : '1 Lorem ipsum', 'text': 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'},
            {'title' : '2 Example text', 'text': 'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci.'},
            {'title' : '3 Discovery', 'text': 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? '},
            {'title' : '4 Latin source', 'text': 'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'},
            {'title' : '5 English translation', 'text': 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. '},
            {'title' : '6 Variations', 'text': 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat…'}
        ];
        
        var component = document.getElementById('component'),
            p = document.querySelectorAll('.section-1 p')[0],
            h = document.querySelectorAll('.section-1 h1')[0],
            point = component.querySelectorAll('.nav .point'),
            cancel = document.getElementById('cancel'),
            checkbox = document.getElementById('checkbox'),
            prev = document.getElementById('previous'),
            next = document.getElementById('next'),
            textItem = 0;
    
        component.style.visibility = 'visible';
    
        if (localStorage.getItem('componentVisible') == 'visible') {component.style.visibility = 'visible';} 
        else if(localStorage.getItem('componentVisible') == 'hidden') {component.style.visibility = 'hidden';}
        
        p.innerHTML = arr[0].text;
        h.innerHTML =  arr[0].title;
        point[0].style.background = '#8C37F5';
    
        cancel.addEventListener("click", closeComponent, false);
        
        document.addEventListener("keydown", e => e.keyCode === 27 ? closeComponent() : null);
    
        function closeComponent() {
            
            component.style.visibility = 'hidden';
            
            if (checkbox.checked == true || e.keyCode == 27 && checkbox.checked == true) {
                 
                localStorage.setItem('componentVisible', 'hidden');
                
            } 
             else if(checkbox.checked == false || e.keyCode == 27 && checkbox.checked == false) {
                 
                 localStorage.setItem('componentVisible', 'visible');
                 
             }
        }
            
        prev.addEventListener( "click" , changeText, false);
        next.addEventListener( "click" , changeText, false);

        document.addEventListener( "keydown" , changeText, false);

        function changeText (e) {
            
            
            
            if (e.target.value == 'next' && textItem != 5 || e.keyCode == 39  && textItem != 5) {
                
                textItem += 1;   
                point[textItem].style.background = '#8C37F5';
                point[textItem-1].style.background = '';
                p.innerHTML = arr[textItem].text;
                h.innerHTML =  arr[textItem].title;

            } else if (e.target.value == 'next' && textItem == 5 ||  e.keyCode == 39 && textItem == 5) {
                
                point[textItem].style.background = '#8C37F5';
                point[5].style.background = '';
                textItem = 0;
                point[textItem].style.background = '#8C37F5';
                p.innerHTML = arr[textItem].text;
                h.innerHTML =  arr[textItem].title;
                
            } else if (e.target.value == 'previous' && textItem != 0 ||  e.keyCode == 37 && textItem != 0) {
                
                textItem -= 1;
                point[textItem].style.background = '#8C37F5';
                point[textItem+1].style.background = '';
                p.innerHTML = arr[textItem].text;
                h.innerHTML =  arr[textItem].title;
                
            } else if (e.target.value == 'previous' && textItem == 0 ||  e.keyCode == 37 && textItem == 0) {
                
                textItem = 5;
                point[textItem].style.background = '#8C37F5';
                point[0].style.background = '';
                p.innerHTML = arr[textItem].text;
                h.innerHTML =  arr[textItem].title;
            }    
        }
    }, 5000);
};

