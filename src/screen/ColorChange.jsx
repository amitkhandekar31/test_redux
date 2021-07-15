import React                    from 'react'
import { connect, useDispatch } from 'react-redux'

import { makeStyles }           from '@material-ui/core/styles';
import Button                   from '@material-ui/core/Button';
import IconButton               from '@material-ui/core/IconButton';
import Icon                     from '@material-ui/core/Icon';

import AddIcon                  from '@material-ui/icons/Add';
import RemoveIcon               from '@material-ui/icons/Remove';
import DoneIcon                 from '@material-ui/icons/Done';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { setColor }             from '../redux/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
     button: {
    margin: theme.spacing(1),
    borderRadius:'10px',
  },

  },
}));

const ColorChange = (props) => {

    const { color } = props
    const dispatch = useDispatch()
    const classes = useStyles();
    return (
        <div className="container-fluid" style={{justifyContent:"left",display:"flex",flexDirection:"column", backgroundColor: color,height:'100vh'}}>
            {/*<div className="container mt-4 mb-2" style={ { backgroundColor: color, height: 100, width: 500 } }></div>*/}
            <div className="mb-5 p-3 mt-3" style={{border:'1px solid #5E4FDB'}} >
                <h2 className="mt-3">Click on any button to get that background Color :</h2>
                
                <div className=" row pt-1 mb-2 ">
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#5E4FDB "))} variant="contained" style={{backgroundColor: '#5E4FDB ', color: '#FFFFFF'}} >Primary main</Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#F3F2FC "))} variant="contained" style={{backgroundColor: '#F3F2FC ', color: '#111111'}} >primary main-light</Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#1ABC9C"))} variant="contained" style={{backgroundColor: '#1ABC9C', color: '#FFFFFF'}}>secondary main</Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#D64B4B "))} variant="contained" style={{backgroundColor: '#D64B4B ', color: '#FFFFFF'}} >negative</Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#852121 "))} variant="contained" style={{backgroundColor: '#852121 ', color: '#FFFFFF'}} >dark red</Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#FFE3E3  "))} variant="contained" style={{backgroundColor: '#FFE3E3  ', color: '#111111'}} >light red</Button>
                </div>
                <div className=" row pt-1 mb-2 ">
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#C06801 "))} variant="contained" style={{backgroundColor: '#C06801 ', color: '#FFFFFF'}} >dark amber </Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#FFF7E3 "))} variant="contained" style={{backgroundColor: '#FFF7E3 ', color: '#111111'}} >light amber </Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#0E4316 "))} variant="contained" style={{backgroundColor: '#0E4316 ', color: '#FFFFFF'}}>dark green </Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#E1EFE1 "))} variant="contained" style={{backgroundColor: '#E1EFE1 ', color: '#111111'}} >light green </Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#000000"))} variant="contained" style={{backgroundColor: '#000000', color: '#FFFFFF'}} >pure black</Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#FFFFFF"))} variant="contained" style={{backgroundColor: '#FFFFFF', color: '#111111'}} >pure white</Button>
                </div>
                <div className=" row pt-1 mb-2 ">
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#808080 "))} variant="contained" style={{backgroundColor: '#808080 ', color: '#FFFFFF'}} >pure black - 50% transparency  </Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#D8D8D8 "))} variant="contained" style={{backgroundColor: '#D8D8D8 ', color: '#111111'}} >dark grey  </Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#F0F0F0 "))} variant="contained" style={{backgroundColor: '#F0F0F0 ', color: '#111111'}}>grey </Button>
                    <Button className="col m-2" onClick={()=>dispatch(setColor("#F6F6F6 "))} variant="contained" style={{backgroundColor: '#F6F6F6 ', color: '#111111'}} >light background grey  </Button>
                </div>
            </div>
            <div className="row pt-1 mb-2 ">
                <h2>Other types of Buttons :</h2>
                <Button className="col-2 m-2">Button</Button>
                <Button className="col-2 m-2" variant="outlined" color="primary">Button</Button>
                {/*<IconButton variant="outlined" color="secondary"><AddIcon /> </IconButton >*/}
            </div>
            <div className={classes.root}>
              <IconButton aria-label="add" color="#FFFFFF" style={{backgroundColor:'#5E4FDB',borderRadius:'5px',color:'#FFFFFF'}} >
                <AddIcon />
              </IconButton>
              <IconButton aria-label="remove" color="primary" style={{backgroundColor:'#D64B4B ',borderRadius:'5px',color:'#FFFFFF'}}>
                <RemoveIcon />
              </IconButton>

              <IconButton aria-label="remove" color="primary" style={{backgroundColor:'#1ABC9C  ',borderRadius:'5px',color:'#FFFFFF'}} >
                <DoneIcon />
              </IconButton>

              <IconButton aria-label="add" color="#FFFFFF" style={{border:'1px solid #5E4FDB',borderRadius:'5px',color:'#5E4FDB'}} >
                <AddIcon />
              </IconButton>
              <IconButton aria-label="remove" color="#FFFFFF" style={{border:'1px solid #D64B4B',borderRadius:'5px',color:'#D64B4B'}} >
                <RemoveIcon />
              </IconButton>
              <IconButton aria-label="done" color="#FFFFFF" style={{border:'1px solid #1ABC9C',borderRadius:'5px',color:'#1ABC9C'}} >
                <DoneIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddCircleIcon />}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<RemoveIcon />}
              >
                Remove
              </Button>

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddCircleIcon />}
                style={{backgroundColor:'#1ABC9C',borderRadius:'15px',width:100}}
              >
                
              </Button>

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<AddCircleIcon />}
                style={{backgroundColor:'#D64B4B ',borderRadius:'15px',width:100}}
              >
                
              </Button>
               
            </div>
        </div>
    )
}
const mapStateToProps = store => ({
    color:store.colorReducer.selectedColor
})
export default connect(mapStateToProps,{})(ColorChange)