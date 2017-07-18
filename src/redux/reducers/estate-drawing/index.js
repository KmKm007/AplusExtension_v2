const initialState = {
  showModal: 0,
  propertys: [
    {
      building: {
        name: '03栋'
      },
      countF: 4,
      countT: 2,
      estate: {
        name: '中信凯旋城(塘厦)'
      },
      id: 'D0C28031-F963-4210-9196-DA32183283C7',
      keyCount: 0,
      no: 'LSQ009882',
      salePrice: 312.00,
      square: 142.39
    }
  ],
  selectedPropertyId: 'D0C28031-F963-4210-9196-DA32183283C7'
}

const estateDrawingReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default estateDrawingReducer
