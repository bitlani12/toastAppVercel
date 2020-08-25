import React, { useState, useEffect, useRef } from 'react';
import Layout from 'components/layout';
import { simplyFetchFromGraph } from 'lib/graph';
import fragments from 'lib/graph/fragments';
import { getLanguage } from 'lib/language';
import ServiceAssistant from './../ServiceAssistant/ServiceAssistant';
import { Outer, SetFilterIcon } from './styles';
import MenuCard from 'components/SpecialMenuCard/SpecialMenuCard';
import SelectedItem from 'page-components/SelectedItem/SelectedItem';
import MenuFilter from 'page-components/MenuFilter/MenuFilter';
import MenuSelector from 'components/layout/header/MenuSelector';
import Header from 'components/layout/header';
import Codepopup from '../Codepopup/Codepopup';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'next/router';
import { handlefilter } from './../../redux/actions/orderAction';
import MaterialDrawer from './../../components/common/MaterialDrawer';
export async function getData() {
  try {
    const { data } = await simplyFetchFromGraph({
      query: `
        query FRONTPAGE($language: String!) {
          catalogue(path: "/web-frontpage", language: $language) {
            ...item
            ...product
          }
        }

        ${fragments}
      `,
      variables: { language: getLanguage() },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const useMountEffect = (fun) => useEffect(fun, []);

function FrontPage({
  catalogue,
  simple,
  menu_data,
  handlefilter,
  filter,
  softReload,
}) {
  // const inside_menu = Object.keys(props.menu_data.menu.menu[selected_menu]);
  const [refIndex, changerefIndex] = useState(0);
  console.log(menu_data, 'this is menu data i am getting');
  const menus = menu_data.menu.menu;
  let list2 = Object.keys(menus);
  const sortingarray = ['food', 'beverages', 'desserts', 'drinks', 'store'];
  /////////////////////////////////////////////////////
  let result = [];
  sortingarray.forEach(function (key) {
    var found = false;
    list2 = list2.filter(function (item) {
      if (!found && item === key) {
        result.push(item);
        found = true;
        return false;
      } else return true;
    });
  });
  console.log(result, 'this is is result');
  ////////////////////////////////////////////////
  console.log(list2, 'this is list 2 0');
  const [selected_menu, set_selected_menu] = useState(list2[0]);
  console.log(selected_menu, list2, 'this is list 2 1');

  // const menus = menu_data.menu.menu;
  const onchange_menu = (menu_type) => {
    changerefIndex(0);
    set_selected_menu(menu_type);
  };

  const inside_menu = Object.keys(menu_data.menu.menu[selected_menu]);
  ////////////////////////////////
  const myRef = [];
  const scrollToRef = (i, e) => {
    if (e === true && selected_menu !== 'Special') {
      setTimeout(() => {
        myRef[i].scrollIntoView();
      }, 10);
    }
  };

  return (
    <Layout>
      {/* <Header simple={simple} /> */}
      <MenuSelector
        selected=""
        menus={menus}
        data={menu_data}
        onchange_menu={onchange_menu}
      />
      <Outer
        selected_menu={selected_menu}
        style={{
          paddingBottom: '100px',
          marginBottom: selected_menu !== 'Special' ? -40 : 35,
          padding: selected_menu !== 'Special' ? '0 0 80px 0rem ' : '7px 1rem',
          background: selected_menu !== 'Special' ? 'lightgray' : '',
          minHeight: '100vh',
        }}
      >
        {inside_menu.map((val, i) => (
          <div
            style={{
              background: selected_menu !== 'Special' ? 'lightgray' : '',
              display: selected_menu !== 'Special' ? '' : 'contents',
            }}
          >
            {' '}
            {selected_menu !== 'Special' && (
              <>
                <div
                  ref={(ref) => {
                    myRef[i] = ref;
                  }}
                ></div>
                <div className="sticky-header">
                  <span className="sticky-span1"></span>
                  <span className="sticky-span2">{val}</span>
                  <span className="sticky-span3"></span>
                </div>
              </>
            )}
            {menus[selected_menu][val].map((val_data, i) => {
              return filter.filter_veg === true ? (
                val_data.item_type === 'veg' &&
                  (val_data.contains_egg === true ? (
                    filter.contains_egg && (
                      <MenuCard
                        val_data={val_data}
                        selected_menu={selected_menu}
                        data={menu_data.menu}
                        key={val_data.item_id}
                        softReload={softReload}
                      />
                    )
                  ) : (
                    <MenuCard
                      val_data={val_data}
                      selected_menu={selected_menu}
                      data={menu_data.menu}
                      key={val_data.item_id}
                      softReload={softReload}
                    />
                  ))
              ) : (
                <MenuCard
                  val_data={val_data}
                  selected_menu={selected_menu}
                  data={menu_data.menu}
                  softReload={softReload}
                  key={val_data.item_id}
                />
              );
            })}
          </div>
        ))}
      </Outer>

      <MenuFilter
        items_list={menus[selected_menu]}
        inside_menu={inside_menu}
        scrollToRef={scrollToRef}
        selected_menu={selected_menu}
        refIndex={refIndex}
      >
        <SetFilterIcon>
          <img src="/static/bx-filter-alt.svg" />
        </SetFilterIcon>
      </MenuFilter>
      {/* <SelectedItem /> */}
      <ServiceAssistant />
      <Codepopup />

      <style>{`
      .sticky-header{
        position: sticky;
        top: -1px;
        font-weight: 700;
        background:lightgray;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border: none;
      }
      .sticky-span1{
    border-bottom: 1px solid;
    flex: 3;
    margin-left: 15px;
      }
     
      .sticky-span2{
        flex:4 ;
        text-transform: uppercase;
        display: flex;
    justify-content: center;
          }
          .sticky-span3{
            border-bottom: 1px solid;
            margin-right: 15px;
            flex: 3;
              }
      `}</style>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  menu_data: state.orderReducer.menu_data,
  filter: state.orderReducer.filter,
});
const mapDispatchToProps = (dispatch) => ({
  handlefilter: bindActionCreators(handlefilter, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FrontPage));
