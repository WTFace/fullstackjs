import processImg from '../../utilities/resize';

it('will reject if processing fail', async () => {
    // non-existing file
    return processImg('fjordee', 100, 100).catch((res) => {
        expect(res).toEqual(jasmine.stringMatching('Input file is missing'));
    });
});

it('takes filename, dimension then resize then save then return the path', async () => {
    return processImg('fjord', 100, 100).then((res) => {
        expect(res).toBe('public/resized/fjord-100100.jpeg');
    });
    // expect(promise).toBeResolvedWith('public/resized/fjord-100100.jpeg');
});
