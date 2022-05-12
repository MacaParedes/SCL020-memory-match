import App from './App.js';

describe ('tests para la función createCardList', ()=>{
  it('createCardList should be a function', () => {
    expect(typeof App.createCardList).toBe('function');
  });  
  it('cardList should be an object', ()=>{
    expect(typeof App.createCardList()).toBe("object");
  }); 
})

describe ('tests para la función duplicateList', ()=>{
  test('retorna un arreglo duplicado',()=>{
    let arr =[1,2,3,4,5,6,7,8,9];
    expect(App.duplicateList(arr)).toHaveLength(arr.length*2);
  })
 
  test('it should be a function', ()=> {
    expect(typeof App.duplicateList).toBe('function');
  })
  test('it should return an array', ()=> {
    let arr=[1,2];
    expect(typeof App.duplicateList(arr)).toBe('object');
  })
})

describe ('test para la función shuffle', ()=>{
  test('la función shuffle retorna un arreglo desordenado',()=>{
    let arr=[1,2,3,4,5,6,7,8,9];
    expect(App.shuffle(arr)).not.toEqual(arr);
  })
})

describe ('tests para la función createBoardElements', ()=>{
  test('la función createBoardElements retorna una instancia de HTML', () => {
    let arr=[1,2,3,4,5,6,7,8,9];
    expect(App.createBoardElements(arr) instanceof HTMLElement).toBe(true);
  });
})

describe ('tests para la función flipSelectedCard', ()=>{
  it("flip selectedCard should be a function", () => {
    expect(typeof App.flipSelectedCard).toBe("function");
  });
})

describe ('tests para función checkMatch', ()=>{
  it("checkMatch should be a function", () => {
    expect(typeof App.checkMatch).toBe("function");
  });
})

describe ('tests para función match', ()=>{
  it("match should be a function", () => {
    expect(typeof App.match).toBe("function");
  });
  it("it should return undefined", ()=>{
    expect(typeof App.match()).toBe("undefined");

})
})

describe ('tests para la función noMatch', ()=>{
  it("noMatch should be a function", () => {
    expect(typeof App.noMatch).toBe("function");
  });
  
  it("it should return undefined", ()=>{
    expect(typeof App.noMatch()).toBe("undefined");
  })
})

describe ('tests para la función checkMatch', ()=>{
  it("with diferent value cards should return false", ()=>{
    let card1 = "1";
    let card2 = "2";
    expect(App.checkMatch(card1,card2)).toBe(false);
  });
  it("with same value cards should return false", ()=>{
    let card1 = "1";
    let card2 = "1";
    expect(App.checkMatch(card1,card2)).toBe(true);
  });
})

describe ('tests para la función resetValues', ()=>{
  it("it should be a function", ()=>{
    expect(typeof App.resetValues).toBe("function");
  })

  it("it should be a function", ()=>{
    let resetValues = App.resetValues();
    expect(typeof resetValues).toBe("undefined");
  })
})


/*   it("it should reset value", ()=>{
    let cards = [{name:"trini",id:"1"},{name:"maca",id:2}];
    expect(App.resetValues(cards)).toEqual([]);
  }) */


