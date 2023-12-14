import { escapeRegExp, reduceAllSpaces } from './index'; 

describe('escapeRegExp', () => {
    it('should escape special characters in a string', () => {
        const inputString = '^ $ * . [ ] { } ( ) ? + |';
        const expectedOutput = '\\^ \\$ \\* \\. \\[ \\] \\{ \\} \\( \\) \\? \\+ \\|';
        expect(escapeRegExp(inputString)).toBe(expectedOutput);
    });

    it('should handle an empty string', () => {
        const inputString = '';
        const expectedOutput = '';
        expect(escapeRegExp(inputString)).toBe(expectedOutput);
    });

    it('should handle a string without special characters', () => {
        const inputString = 'NoSpecialCharacters123';
        const expectedOutput = 'NoSpecialCharacters123';
        expect(escapeRegExp(inputString)).toBe(expectedOutput);
    });
});

describe('reduceAllSpaces', () => {
    it('should removes all spaces from a string', () => {
        const inputString = 'Remove all spaces';
        const expectedOutput = 'Removeallspaces';
        expect(reduceAllSpaces(inputString)).toBe(expectedOutput);
    });

    it('should handle an empty string', () => {
        const inputString = '';
        const expectedOutput = '';
        expect(reduceAllSpaces(inputString)).toBe(expectedOutput);
    });

    it('should handle a string without spaces', () => {
        const inputString = 'NoSpacesHere';
        const expectedOutput = 'NoSpacesHere';
        expect(reduceAllSpaces(inputString)).toBe(expectedOutput);
    });

    it('should handle a string with multiple spaces', () => {
        const inputString = 'Multiple    Spaces   Here';
        const expectedOutput = 'MultipleSpacesHere';
        expect(reduceAllSpaces(inputString)).toBe(expectedOutput);
    });
});
