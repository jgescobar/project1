#Connect Cuatro

The way you play my game is you click on the column you want the dog or cat to fall in and then you have to match four. 

	Step One:
    	Click on "Let's Play"

	Step Two:
    	Player 1 starts aka "Cat"
    	after Cat has made its move, 
    	Player 2 starts aka "Dog".

	Step Three:
    There is no step three because my check winner function never checked out. 

	In conclusion:
    Just click anything you want until the entire board gets full. 
    Both "Cat" and "Dog" are winners because in my world, they are both winners. 

    THE END! 



HTML 
I broke my pages into three sections instead of divs. The first section I made my table with all the cells I needed to represent my board. There were forty two total. My board was a seven by six board with six "td". I named my cell indexes by the (x,y) cordinates but later when i was working on my javaScript, I realized I should have started with the y axis as it helped keep track of the way i was calling the cells in my nested array for my winner functions and move function. I'll elaborate more on that when I get to javaScript. The second section on my html was so I could display the catVSdog image once the player clicks on the "let's play" button. I ran into my first issue here because the way I had originally set my sections up, I had the table at the bottom and my title page all the way at the begining of my body section. This was affecting the way my title looked while I tested out the aesthetics of my game. The section that preceded my first section of "Title page" was crossing into the title of my game. In other words, my last page which notified when the winner has won, was seeping into the title page of "Connect Cuatro,". I was able to trouble shoot this issue when I rearranged the location of where I had set my sections. 

 I used a div for separating my first header. I included my "Let's Play" button inside of that same div. Lastly, I made a section for winner page where it displays a restart button to allow the player to play again. 
 
[trello](https://trello.com/b/uiBkE54X/project)
![alt text] (https://i.imgur.com/vWidiQU.png)