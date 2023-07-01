import React from 'react'
import { CtCountries, CtCountriesPage, TxtTitle } from './Countries.styled'
import Country from '../../components/country/Country'

function Countries() {

    const data = [
        {
            id:0,
            name: 'Japón'
        },
        {
            id:1,
            name: 'Camboya'
        },
        {
            id:2,
            name: 'Japón'
        },
        {
            id:3,
            name: 'Camboya'
        },
        {
            id:4,
            name: 'Japón'
        },
        {
            id:5,
            name: 'Camboya'
        }
    ] 
  return (
    <CtCountriesPage>
        <TxtTitle>ASIA</TxtTitle>
        
        <CtCountries>
            {
                data.map((country, index) => (
                    <Country country={country} key={index}/>
                ))
            }
            
        </CtCountries>
    </CtCountriesPage>
  )
}

export default Countries