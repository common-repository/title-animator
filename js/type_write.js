function trrotate(){if(document.all||document.getElementById){document.title=title_content.substring(0,counter);if(counter==title_content.length){counter=0;setTimeout("trrotate()",400)}else{counter++;setTimeout("trrotate()",200)}}}var title_content=document.title;var counter=0;trrotate()