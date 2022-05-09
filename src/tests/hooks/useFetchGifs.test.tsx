import { renderHook } from '@testing-library/react';
import {useFetchGifs} from '../../hooks/useFetchGifs';

describe('Test useFetchGifs hook', () => {

  it('should return the initial state', async () => {

    const { result } = renderHook(() => useFetchGifs('One Punch'));

    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true)

  });

})