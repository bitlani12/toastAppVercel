import * as types from '../types';

import createReducer from './createReducer';
const initialState = {
  menu_data: {},
  place_order_selected_items: {},
  handle_initial_selected: false,
  addItem: [],
  selected_menu_data: {},
  billing_data: [],
  apply_coupon: '',
  get_coupon: [],
  add_tip: {},
  get_table_code: {},
  place_order: {},
  apply_zomato: {},
  final_amount: '',
  get_item_review: [],
  load_item_review: false,
  filter: {
    filter_veg: false,
    veg: 'veg',
    contains_egg: false,
  },
};

export const orderReducer = createReducer(initialState, {
  [types.MENU_DATA](state, action) {
    // const menus = action.data.menu.menu;
    // console.log(action.data.menu.menu, 'this is is x ===== 2222');
    // let list2 = Object.keys(menus);
    // let y = {};
    // list2.map((val) => {
    //   const inside_menu = Object.keys(action.data.menu.menu[val]);

    //   inside_menu.map((inside) => {
    //     let x = action.data.menu.menu[val][inside].filter((val_data, i) => {
    //       return val_data.is_special === true;
    //     });
    //     if (x.length > 0) {
    //       y = { ...y, [inside]: x };
    //     }
    //   });
    // });
    // console.log(y, 'this is y');
    // action.data = {
    //   ...action.data,
    //   menu: {
    //     ...action.data.menu,
    //     menu: { ...action.data.menu.menu, Special: y },
    //   },
    // };
    // );

    return {
      ...state,
      menu_data: action.data,
    };
  },
  [types.SELECTED_MENU_DATA](state, action) {
    console.log('add item reducer selected menu');
    return {
      ...state,
      selected_menu_data: action.data,
      handle_initial_selected: true,
    };
  },
  [types.ADD_ITEM](state, action) {
    console.log(action.data, 'this is add item reducer');
    const length = state.addItem.length;
    return {
      ...state,
      addItem: state.addItem.concat({
        item_id: action.data.item_id,
        qty: 1,
        item_name: action.data.item_name,
        item_price_details: action.data.item_price_details,
        addon_details: action.data.addon_details,
        totat_qty: 1,
        unique_item: length > 0 ? state.addItem[length - 1].unique_item + 1 : 1,
      }),
    };
  },
  [types.ADD_ITEM_INCREASE](state, action) {
    console.log('add item reducer 2', state.addItem);
    // const pos = 1;
    let idAlreadyExists;

    idAlreadyExists = state.addItem.findIndex(
      (val) => val.item_id === action.data.item_id
    );
    const addItem = [...state.addItem];
    addItem[idAlreadyExists].qty = state.addItem[idAlreadyExists].qty + 1;
    return {
      ...state,
      addItem: addItem,
    };
  },
  [types.ADD_ITEM_INCREASE_PLACE_ORDER](state, action) {
    let idAlreadyExists;

    idAlreadyExists = state.addItem.findIndex(
      (val) => val.unique_item === action.data.unique_item
    );
    const addItem = [...state.addItem];
    addItem[idAlreadyExists].qty = state.addItem[idAlreadyExists].qty + 1;
    return {
      ...state,
      addItem: addItem,
    };
  },

  [types.ADD_TO_ARRAY](state, action) {
    let check_addonid;
    console.log('add to tray ', action.data, state.addItem);
    // check_addonid = state.addItem.findIndex(
    //   (val) =>
    //     val.addon_details[0].addon_id === action.data.addon_details[0].addon_id
    // );
    // check id already exist then increase
    const length = state.addItem.length;
    let idAlreadyExists;

    idAlreadyExists = state.addItem.findIndex(
      (val) => val.item_id === action.data.item_id
    );
    return {
      ...state,
      addItem: state.addItem.concat({
        item_id: action.data.item_id,
        qty: 1,
        item_name: action.data.item_name,
        item_price_details: action.data.item_price_details,
        addon_details: action.data.addon_details,
        totat_qty: 1,
        unique_item: state.addItem[length - 1].unique_item + 1,
      }),
    };
  },
  [types.ADD_ITEM_DECREASE](state, action) {
    let idAlreadyExists;

    idAlreadyExists = state.addItem.findIndex(
      (val) => val.item_id === action.data.item_id
    );
    if (state.addItem[idAlreadyExists].qty <= 1) {
      return {
        ...state,
        addItem: state.addItem.filter(
          (item, index) => item.item_id !== action.data.item_id
        ),
      };
    } else {
      // const all_same_addon = state.addItem.filter((item) => item.item_id === action.data.item_id)
      console.log(state.addItem, action.data, 'this is decrease');
      const addItem = [...state.addItem];
      addItem[idAlreadyExists].qty = state.addItem[idAlreadyExists].qty - 1;
      // const length = state.addItem[idAlreadyExists].addon_details.length;

      // addItem[idAlreadyExists].addon_details = state.addItem[
      //   idAlreadyExists
      // ].addon_details.splice(-1, 1);
      console.log('add item reducer 3 -----', state.addItem);
      return {
        ...state,
        addItem: addItem,
      };
    }
  },

  [types.ADD_ITEM_DECREASE_PLACE_ORDER](state, action) {
    console.log(state.addItem, action.data, 'this is decrease 2');
    let idAlreadyExists;

    idAlreadyExists = state.addItem.findIndex(
      (val) => val.unique_item === action.data.unique_item
    );
    if (state.addItem[idAlreadyExists].qty <= 1) {
      return {
        ...state,
        addItem: state.addItem.filter(
          (item, index) => item.unique_item !== action.data.unique_item
        ),
      };
    } else {
      // const all_same_addon = state.addItem.filter((item) => item.item_id === action.data.item_id)
      console.log(state.addItem, action.data, 'this is decrease');
      const addItem = [...state.addItem];
      addItem[idAlreadyExists].qty = state.addItem[idAlreadyExists].qty - 1;
      // const length = state.addItem[idAlreadyExists].addon_details.length;

      // addItem[idAlreadyExists].addon_details = state.addItem[
      //   idAlreadyExists
      // ].addon_details.splice(-1, 1);
      console.log('add item reducer 3 -----', state.addItem);
      return {
        ...state,
        addItem: addItem,
      };
    }
  },
  [types.ADD_ITEM_DECREASE_ADDON](state, action) {
    console.log(state.addItem, action.data, 'this is decrease 2');

    let same_id_array = state.addItem.filter(
      (val) => val.item_id === action.data.item_id
    );
    const selected_item = same_id_array[same_id_array.length - 1];
    const unique_item_id = selected_item.unique_item;
    if (selected_item.qty <= 1) {
      return {
        ...state,
        addItem: state.addItem.filter(
          (item, index) => item.unique_item !== unique_item_id
        ),
      };
    } else {
      const addItem = [...state.addItem];

      // const all_same_addon = state.addItem.filter((item) => item.item_id === action.data.item_id)

      let idAlreadyExists;

      idAlreadyExists = state.addItem.findIndex(
        (val) => val.unique_item === unique_item_id
      );
      addItem[idAlreadyExists].qty = state.addItem[idAlreadyExists].qty - 1;
      // const length = state.addItem[idAlreadyExists].addon_details.length;

      addItem[idAlreadyExists].addon_details = state.addItem[
        idAlreadyExists
      ].addon_details.splice(-1, 1);
      return {
        ...state,
        addItem: addItem,
      };
    }
  },
  [types.REPEAT_LAST_ADDON](state, action) {
    let idAlreadyExists;
    console.log(action.data, 'this is repeat last reducer');
    idAlreadyExists = state.addItem.findIndex(
      (val) =>
        val.unique_item === action.data[action.data.length - 1].unique_item
    );

    const addItem = [...state.addItem];
    addItem[idAlreadyExists].qty = state.addItem[idAlreadyExists].qty + 1;
    return {
      ...state,
      addItem: addItem,
    };
  },
  [types.BILLING_DATA](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      billing_data: action.data,
    };
  },
  [types.APPLY_COUPON](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      apply_coupon: action.data,
    };
  },
  [types.GET_COUPON](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      get_coupon: action.data,
    };
  },
  [types.ADD_TIP](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      add_tip: action.data,
    };
  },
  [types.GET_TABLE_CODE](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      get_table_code: action.data,
    };
  },
  [types.PLACE_ORDER](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      place_order: action.data,
      addItem: [],
    };
  },
  [types.COMPLAINTS](state, action) {
    return {
      ...state,
      complaints: action.data,
    };
  },
  [types.FILTER_DATA](state, action) {
    return {
      ...state,
      filter: {
        filter_veg: !state.filter.filter_veg,
      },
      // menu_data: {
      //   ...menu_data.menu.menu[action.selected_menu],
      // },
    };
  },

  [types.FILTER_DATA_CONTAINS_EGG](state, action) {
    return {
      ...state,

      filter: {
        ...state.filter,
        contains_egg: state.filter.filter_veg
          ? !state.filter.contains_egg
          : null,
      },
      // menu_data: {
      //   ...menu_data.menu.menu[action.selected_menu],
      // },
    };
  },
  [types.ZOMATOGOLD](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      apply_zomato: action.data,
    };
  },
  [types.GET_ITEM_REVIEW](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      get_item_review: action.data,
    };
  },
  [types.LOAD_ITEM_REVIEW](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      load_item_review: action.data,
    };
  },
  [types.FINAL_AMOUNT](state, action) {
    console.log(action.data, 'this is action data');
    return {
      ...state,
      final_amount: action.data,
    };
  },
});
