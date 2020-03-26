import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchCountriesRequested
} from '../../actions/country'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [countries] = useSelector(state => state.country.documents.countries);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchCountriesRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            {JSON.stringify(countries)}
        </div>
    )
};
export default Edit;