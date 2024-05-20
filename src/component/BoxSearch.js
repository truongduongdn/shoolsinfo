import React from 'react';
import '../styles/BoxSearch.module.css';

function BoxSearch(props) {
    return (
        <div>
         <form action="#">
      <div class="form-group">
        <label for="school_Name">Input School name:</label>
        <input type="text" id="school_Name" name="School_Name" placeholder="Input School name" />
      </div>
      <div class="form-group">
        <label for="school_location">Tỉnh thành phố:</label>
        <input type="text" id="school_location" name="school_location" placeholder="Chọn Tỉnh thành phố " />
        <option value="HCM" selected>Ho Chi Minh </option>
        <option value="Hanoi" >Hà Nội</option>
        <option value="HaiPhong" selected>Hải Phòng</option>
      </div>     
      <div class="form-group">
        <label for="school_Type">School type</label>
        <select id="school_Type" name="lschool_Type">
          <option value="Primary_school">Primary school</option>
          <option value="Middle_School">Middle School</option>          
          <option value="High_School">High School</option>
        </select>
      </div>
      <button type="submit">Tìm kiếm</button>
    </form>
    <div id="ket-qua-tim-kiem">
      <h2>Kết quả tìm kiếm</h2>
      <ul>
        </ul>
    </div>
        </div>
    );
}

export default BoxSearch;