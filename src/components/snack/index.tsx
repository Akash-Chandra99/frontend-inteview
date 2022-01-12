import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


interface snackType {
  snackPack:string[],
  setSnackPack:React.Dispatch<React.SetStateAction<string[]>>
}


const Snack: React.FC<snackType> = ({snackPack, setSnackPack }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [messageInfo, setMessageInfo] = React.useState<string>("");
  useEffect(() => {
    if (snackPack.length){
      setMessageInfo(snackPack[snackPack.length - 1])
      setOpen(true);
    } else if (snackPack.length && open) {
      setOpen(false);
    }
  }, [snackPack]);
  

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (

    <div>
      <Snackbar
        anchorOrigin={{ vertical : "top", horizontal : "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={messageInfo}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
        
    </div>
          

  );
}

export default Snack;
