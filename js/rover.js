// Iteration 1 | The rover object

class Rover {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = 'N';
    this.travelLog = [{ x: this.x, y: this.y }];
  }
  turnLeft() {
    switch (this.direction) {
      case 'N':
        this.direction = 'W';
        break;
      case 'W':
        this.direction = 'S';
        break;
      case 'S':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'N';
        break;
    }
    this.showDirection();
  }
  turnRight() {
    switch (this.direction) {
      case 'N':
        this.direction = 'E';
        break;
      case 'E':
        this.direction = 'S';
        break;
      case 'S':
        this.direction = 'W';
        break;
      case 'W':
        this.direction = 'N';
        break;
    }
    this.showDirection();
  }
  moveForward() {
    if (this.direction === 'N' && this.y > 0) {
      this.y--;
    } else if (this.direction === 'E' && this.x < 9) {
      this.x++;
    } else if (this.direction === 'S' && this.y < 9) {
      this.y++;
    } else if (this.direction === 'W' && this.x > 0) {
      this.x--;
    } else {
      console.log("You can't place rover outside of the grid!");
    }
    this.saveInTravelLog();
    this.showPosition();
  }
  moveBackward() {
    if (this.direction === 'N' && this.y < 9) {
      this.y++;
    } else if (this.direction === 'E' && this.x <= 0) {
      this.x--;
    } else if (this.direction === 'S' && this.y <= 0) {
      this.y--;
    } else if (this.direction === 'W' && this.x < 9) {
      this.x++;
    } else {
      console.log("You can't place rover outside of the grid!");
    }
    this.saveInTravelLog();
    this.showPosition();
  }

  showPosition() {
    console.log(`Rover has position: x=${this.x}, y=${this.y}`);
  }

  showDirection() {
    console.log(`Now rover direction is: ${this.direction}`);
  }
  saveInTravelLog() {
    theRover.travelLog.push({ x: this.x, y: this.y });
  }
}

function command(theRover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    switch (order) {
      case 'l': // left
        // turnLeft(theRover, order);
        theRover.turnLeft();
        break;
      case 'r': // right
        // turnRight(theRover, order);
        theRover.turnRight();
        break;
      case 'f': // forward
        // moveForward(theRover, order);
        theRover.moveForward();
        break;
      case 'b': // backward
        // moveBackward(theRover, order);
        theRover.moveBackward();
        break;
      default:
        console.log('Invalid command!'); // Bonus 3 | Validate inputs
        break;
    }
  }
  theRover.showPosition();
}

const rover = new Rover();
command(rover, 'brf');

// for loop - tracking
rover.travelLog.forEach((position) => {
  console.log(`position x:${position.x} y:${position.y}`);
});
