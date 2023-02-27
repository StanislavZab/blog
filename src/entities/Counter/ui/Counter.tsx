import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        console.log('+');
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        console.log('-');
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{`value = ${counterValue}`}</h1>
            <Button data-testid="increment-btn" onClick={increment}>+</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>-</Button>
        </div>
    );
};
