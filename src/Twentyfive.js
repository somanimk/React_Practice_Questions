import React from 'react'
import { useLocalization } from './LocalizedString'

 const Twentyfive = () => {

    const {locale,setLocale,translate}=useLocalization()

    const handleLocaleChange=(newLocale)=>
    {
        setLocale(newLocale)
    }
  return (
    <div>
        <h1>{translate('greeting')}</h1>
        <h1>{translate('welcome')}</h1>
        <button onClick={()=>handleLocaleChange('en')}>English</button>
        <button onClick={()=>handleLocaleChange('es')}>Espanol</button>
    </div>
  )
}

export default Twentyfive;