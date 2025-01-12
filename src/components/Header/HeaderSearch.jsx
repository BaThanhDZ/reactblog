import { useDispatch } from 'react-redux';
import Input from '../shared/Input';
import { actSearchValue } from '../../store/search/actions';

function HeaderSearch() {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(actSearchValue(event.target.value.trim()))
  }
  return (
    <div className="tcl-col-3">
      {/* Header Search */}
      <form>
        <Input 
          type="search" 
          placeholder="Nhap gia tri search ..." 
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default HeaderSearch;
