const activ = ['Visit the iconic Statue of Liberty and take a ferry ride to Liberty Island.', 'Explore Central Park, which covers 843 acres and includes a zoo, several lakes, and various walking paths.', 'Take a trip to the top of the Empire State Building for breathtaking views of the city skyline.', 'Catch a Broadway show at one of the many theaters in Times Square.', 'Walk across the Brooklyn Bridge and take in the views of Manhattan from the other side.', 'Visit the Metropolitan Museum of Art and see works of art from around the world.', 'Stroll through the trendy neighborhoods of SoHo and Greenwich Village, filled with boutiques, cafes, and street art.', 'Experience the excitement of the city that never sleeps by taking a nighttime stroll through Times Square.', 'Visit the 9/11 Memorial and Museum to pay tribute to the victims and learn about the history of the tragic event.', 'Enjoy some delicious food from one of the many famous New York City restaurants, such as Katz\'s Delicatessen or Lombardi\'s Pizza.', 'Go thrift shopping in Williamsburg at some of the best vintages stores in the world.', 'Take the 7 train through Queens and eat at some of the most affordable and authentic cuisine from around the globe.', 'Ride the free Staten Island Ferry and see some of the best views of the Statue of Liberty.']

const getActiv = () => {
    let i = Math.floor(Math.random() * 13);
    return activ[i];
};

let button = document.getElementById('startButton');

let openRec = function() {
    let container = document.getElementById('recContainer');
    let card1 = document.getElementById('card1')
    let card2 = document.getElementById('card2')
    let card3 = document.getElementById('card3')

    let card1Text = getActiv();
    let card2Text = getActiv();
        while (card1Text === card2Text){
            card2Text = getActiv();
        };
    let card3Text = getActiv();
        while (card3Text === card1Text || card3Text === card2Text){
            card3Text = getActiv();
        };

    container.style.display = 'block'
    card1.innerHTML = card1Text;
    card2.innerHTML = card2Text;
    card3.innerHTML = card3Text;
    button.innerHTML = 'Try Again?'
};

button.addEventListener('click', openRec);