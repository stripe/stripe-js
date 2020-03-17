import * as path from 'path';
import {readFileSync} from 'fs';

import * as ts from 'typescript';

const parsedCommandLine = ts.getParsedCommandLineOfConfigFile(
  path.resolve(__dirname, 'tsconfig.json'),
  {},
  {
    ...ts.sys,
    getCurrentDirectory: () => __dirname,
    onUnRecoverableConfigFileDiagnostic: () => {},
  }
)!;

const getError = function(fileName: string) {
  const program = ts.createProgram([fileName], parsedCommandLine.options);
  const diagnostics = ts.getPreEmitDiagnostics(program);

  return ts.flattenDiagnosticMessageText(diagnostics[0].messageText, '\n');
};

describe('Typescript errors', () => {
  test.each([['createCardTokenExtraPropertyError', 'extra_property']])(
    '%s',
    (fileName, expectedError) => {
      expect(
        getError(path.resolve(__dirname, `./fixtures/${fileName}.ts`))
      ).toMatch(expectedError);
    }
  );
});
