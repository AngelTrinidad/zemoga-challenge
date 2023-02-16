import {renderHook, waitFor} from '@testing-library/react-native';

import {useNetInfo} from '.';

describe('Hook useNetInfo', () => {
  test('should return connected status', async () => {
    const {result} = renderHook(() => useNetInfo());

    await waitFor(() => expect(result.current.isConnected).toBe(true), {
      timeout: 2000,
    });
  });
});
