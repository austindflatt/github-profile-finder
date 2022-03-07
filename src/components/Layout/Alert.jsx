import React, { useContext } from 'react'
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/material';
import AlertContext from '../../context/alert/AlertContext';

export const AlertMessage = () => {
  const { alert } = useContext(AlertContext)

  return alert !== null && (
	<Stack sx={{ width: '100%' }} spacing={2} style={{ marginBottom: '20px' }}>
		<Alert severity="error">Error, you must enter a username</Alert>
	</Stack>
  )
}
