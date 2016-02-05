#Connect Cuatro

![alt text] (https://i.imgur.com/vWidiQU.png)

	Step One:
    Click on "Let's Play"

	Step Two:
    Player 1 starts aka "Cat"
    after Cat has made its move.. 

	Step Three:
    Player 2 starts aka "Dog".

	Step Four:
    First player to connect four in a row wins! 

    THE END! 



##HTML
 
I broke my pages into three sections instead of divs. The first section I made my table with all the cells I needed to represent my board. There were forty two total. My board was a seven by six board with six "td". I named my cell indexes by the (x,y) coordinates but later when i was working on my javaScript, I realized I should have started with the y axis as it helped keep track of the way i was seeing the cells on my board. The second section on my html was so I could display the catVSdog image once the player clicks on the "let's play" button. 
I used a div for separating my first header. I included my "Let's Play" button inside of that same div. Lastly, I made a section for winner pFage where it displays a restart button to allow the player to play again. 

##CSS
I used this section for styling my game. This is where I had fun. 

##javaScript

Where should I start, oh yes... this was where the headaches really came out. I used a combination of jQuery and DOM elements. For somethings like even listeners I found it easier to just work with the Dom. For other issues, I really liked jQuery. When It came to adding images I mainly used jQuery. Also, my board array was mainly based off column then rows as opposed to rows then columns, in other words it looks like this board[column][row]. I decided to use math to compute who won since I had set my cat to 1 and dog to -1. So which ever would return 4 or -4 would be the winner. I also made a render() so I could change pages. 

Bellow is the link to my user stories on Trello:
 
[Ta Ta TA Trello](https://trello.com/b/uiBkE54X/project)
 

