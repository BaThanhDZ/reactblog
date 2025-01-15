import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../shared/Input';

function HeaderSearch() {
  const [valueSearch, setValueSearch] = useState("")
  let navigate = useNavigate();
  
  function handleChange(event) {
    setValueSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search?keyword=${valueSearch}`);
    setValueSearch("")
  }
  
  return (
    <div className="tcl-col-3">
      {/* Header Search */}
      <form onSubmit={handleSubmit}>
        <Input 
          type="search" 
          placeholder="Nhap gia tri search ..." 
          onChange={handleChange}
          name="keyword"
          value={valueSearch}
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
