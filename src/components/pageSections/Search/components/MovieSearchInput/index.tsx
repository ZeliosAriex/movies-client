import React, { ChangeEvent, useRef, useState } from 'react'
import { Container, Search } from './styled'
import debounce from 'lodash.debounce'
import { useSearchPageState } from '../../../../../contexts/pageContexts/Search'
import { INPUT_DEBOUNCE_TIME } from './constants'

export const MovieSearchInput = () => {
  const { state, dispatch, actions } = useSearchPageState()
  const [searchValue, setSearchValue] = useState(
    state.searchQuery
  )

  /* We need to debounce the changes, we dont want to
     overload the API */
  const debouncedSearchQuerySet = useRef(
    debounce(
      (value: string) =>
        dispatch(actions.setSearchQuery(value)),
      INPUT_DEBOUNCE_TIME
    )
  )

  const debouncedResetCurrentPage = useRef(
    debounce(
      () => dispatch(actions.setCurrentPage(1)),
      INPUT_DEBOUNCE_TIME
    )
  )

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value)
    debouncedResetCurrentPage.current()
    debouncedSearchQuerySet.current(e.target.value)
  }

  return (
    <Container>
      <Search
        value={searchValue}
        size={'large'}
        allowClear
        placeholder='Search for a movie'
        onChange={handleInputChange}
      />
    </Container>
  )
}
