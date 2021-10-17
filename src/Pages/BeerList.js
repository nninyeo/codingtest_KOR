/* eslint-disable */

import React from 'react'
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom';
import { Checkbox, Divider } from 'antd';


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, mountNode);

const BeerList = () => {
  return (
    <div>
    <Link to="/Home">홈으로</Link>
    <br/>
    <Link to="/cart">카트</Link>
    <br/>


     <div style={{ maxWidth: '100%'}}>
        
     <MaterialTable
      title="Beer List"
      options={{
          paging: false,
          search: false,
        }}
      columns={[
        { title: '번호', field: 'id' },
        { title: '술이름', field: 'name' },
        { title: '슬로건', field: 'tagline' },
        { title: '담군날', field: 'first_brewed' },
        { title: '설명', field: 'description', width: "50%" },
        { title: '도수', field: 'abv' },
        {
          field: 'image_url',
          title: '이미지',
          render: rowData => <img src={rowData.image_url} style={{width: 50, borderRadius: '50%'}}/>
        },
        
        // { title: 'ibu', field: 'ibu' },
        // { title: 'target_fg', field: 'target_fg' },
        // { title: 'target_og', field: 'target_og' },
        // { title: 'ebc', field: 'ebc' },
        // { title: 'srm', field: 'srm' },
        // { title: 'ph', field: 'ph' }
      ]}
      data={query =>
        new Promise((resolve, reject) => {
          let url = 'https://api.punkapi.com/v2/beers'
          fetch(url)
            .then(response => response.json())
            .then(result => {
              resolve({
                data: result,
                //page: result.page - 1,
                //totalCount: result.total,
              })
            })
        })
      }
    />





      </div>


    </div>
  )
}
export default BeerList