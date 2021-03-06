describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
     expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
    var onelevel_flat_arr = [].concat.apply([], arr);

        var sec_level_flat_arr = [].concat.apply([], onelevel_flat_arr);
        arr = [].concat.apply([], sec_level_flat_arr);
        arr = arr.sort();
    
    expect(arr).toEqual(expected);
  });
});
