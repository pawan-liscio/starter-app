
function checkIfWin(idx, boxes, val){
    switch(idx){
      case 0:
        if(val === boxes[1] && val === boxes[2]){
          return [0,1,2]
        }
        if(val === boxes[3] && val === boxes[6]){
          return [0,3,6]
        }
        if(val === boxes[8] && val === boxes[4]){
          return [0,4,8]
        }
        break;
      case 1:
        if(val === boxes[0] && val === boxes[2]){
          return [0,1,2]
        }
        if(val === boxes[4] && val === boxes[7]){
          return [1,4,7]
        }
        break;
      case 2:
        if(val === boxes[1] && val === boxes[0]){
          return [0,1,2]
        }
        if(val === boxes[5] && val === boxes[8]){
          return [0,5,8]
        }
        if(val === boxes[4] && val === boxes[6]){
          return [2,4,6]
        }
        break;
      case 3:
        if(val === boxes[4] && val === boxes[5]){
          return [3,4,5]
        }
        if(val === boxes[0] && val === boxes[6]){
          return [0,3,6]
        }
        break;
      case 4:
        if(val === boxes[3] && val === boxes[5]){
          return [3,4,5]
        }
        if(val === boxes[1] && val === boxes[7]){
          return [1,4,7]
        }
        if(val === boxes[0] && val === boxes[8]){
          return [0,4,8]
        }
        if(val === boxes[2] && val === boxes[6]){
          return [2,4,6]
        }
        break;
      case 5:
        if(val === boxes[3] && val === boxes[4]){
          return [3,4,5]
        }
        if(val === boxes[2] && val === boxes[8]){
          return [2,5,8]
        }
        break;
      case 6:
        if(val === boxes[0] && val === boxes[3]){
          return [0,3,6]
        }
        if(val === boxes[7] && val === boxes[8]){
          return [6,7,8]
        }
        if(val === boxes[2] && val === boxes[4]){
          return [2,4,6]
        }
        break;
      case 7:
        if(val === boxes[6] && val === boxes[8]){
          return [6,7,8]
        }
        if(val === boxes[1] && val === boxes[4]){
          return [1,4,7]
        }
        break;
      case 8:
        if(val === boxes[6] && val === boxes[7]){
          return [6,7,8]
        }
        if(val === boxes[2] && val === boxes[5]){
          return [2,5,8]
        }
        if(val === boxes[0] && val === boxes[4]){
          return [0,4,8]
        }
        break;
      default:
        return [null, null, null]
    }
    return [null, null, null]
  }


export { checkIfWin };