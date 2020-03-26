import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchCarsRequested
} from '../../actions/car'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [cars] = useSelector(state => state.car.documents.cars);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchCarsRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            {JSON.stringify(cars)}
        </div>
    )
};
export default Edit;