import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useAPI = ({ query }) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    axios
      .get(
        'https://shielded-harbor-19811.herokuapp.com/api/all/' + query
          ? query
          : 'avengers',
      )
      .then(data => {
        console.log(data.data)
      })
  }, [])

  return data
}

export default useAPI

const styles = StyleSheet.create({})
