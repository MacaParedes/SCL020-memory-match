import App from './App.js';

describe ('tests para el archivo App.js', ()=>{

  it("createCardList should be a function and return an array", () => {
    let cardList = App.createCardList;
    expect(typeof cardList).toBe("function");
    let cardList1 = App.createCardList();
    expect(typeof cardList1).toBe("object");
  }); 

  test('la función duplicateList retorna un arreglo duplicado',()=>{
    let arr =[1,2,3,4,5,6,7,8,9];
    let duplicated = App.duplicateList(arr);
    //assertion
    //expect to be an array
    expect(duplicated).toHaveLength(arr.length*2);
  })
  test('la función shuffle retorna un arreglo desordenado',()=>{
    let arr=[1,2,3,4,5,6,7,8,9];
    let shuffled = App.shuffle(arr);
    //assertion
    expect(shuffled).not.toEqual(arr);
  })

  test('la función createBoardElements retorna una instancia de HTML', () => {
    let arr=[1,2,3,4,5,6,7,8,9];
    const div = App.createBoardElements(arr);
    expect(div instanceof HTMLElement).toBe(true);
  });

  it("flip selectedCard should be a function", () => {
    let flip = App.flipSelectedCard;
    expect(typeof flip).toBe("function");
    //make visible divs (this)
  });

  it("checkMatch should be a function", () => {
    let checkMatch = App.checkMatch;
    expect(typeof checkMatch).toBe("function");
  });

  it("match should be a function", () => {
    let match = App.match;
    expect(typeof match).toBe("function");
  });

  it("noMatch should be a function", () => {
    let noMatch = App.noMatch;
    expect(typeof noMatch).toBe("function");
  });

  it("should work ", ()=>{
    let card1 = "1";
    let card2 = "2";
    let result = App.checkMatch(card1,card2);
    expect(result).toBe(false);
  });
})