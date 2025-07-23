
import {Box, InputBase,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Component=styled(Box)`
    background: #fff;
    height:45px;
    border-bottom:1px solid #F2F2F2;
    display:flex;
    align-item:center;

`

const Wrapper=styled(Box)`
   background-color:#f0f2f5;
   position:relative;
   margin:5px 13px 5px 5px;
   width:100%;
   border-radius:10px;

`
const Icon=styled(Box)`
     position:absolute;
     height:100%;
     padding: 6px 10px;
     color:#919191;

`
const InputField=styled(InputBase)`
   width:100%;
   padding:16px;
   padding-left:100px;
   font-size:14px;
   height:15px;

`


const Search= ({setText})=>{
    return(
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon  fontSize="small"/>
                </Icon>  
                <InputField 
                             placeholder="Search or Start new chart"
                             onChange={(e)=>setText(e.target.value)}/>              
            </Wrapper>
        </Component>
    )

}

export default Search;