import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './DisplayMedicine.css';

const ExcelData = () => {
  
  const location = useLocation();
  const medicine = location.state?.medicine;
  const [medicineData, setMedicineData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    console.log('Medicine Data:', medicine);
    const fetchData = async () => {
      try {
        const fileUrl = 'https://docs.google.com/spreadsheets/d/1FqfbwF7crjKmXnvWtVK9i_RCaBfhMEv0-imW0Es4-oI/edit#gid=1219979586';
        const response = await fetch(fileUrl);
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setMedicineData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = medicineData.filter(item => {
      return Object.values(item).some(val => {
        if (typeof val === 'string' && val.toLowerCase().includes(medicine.toLowerCase())) {
          return true;
        }
        return false;
      });
    });
    setFilteredData(filtered);
  }, [medicine, medicineData]);

  const renderCellValue = (value) => {
    if (typeof value === 'string' && value.match(/\.(jpeg|jpg|gif|png)$/) != null) {
      return <img src={value} alt="medicine" style={{ maxWidth: '100%', height: 'auto' }} />;
    }
    return value;
  };

  return (
    <div className="contain">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            {Object.keys(filteredData[0] || {}).length > 0 && (
              <tr>
                {Object.keys(filteredData[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {filteredData.map((medicine, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(medicine).map((value, cellIndex) => (
                  <td key={cellIndex}>{renderCellValue(value)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default ExcelData;
