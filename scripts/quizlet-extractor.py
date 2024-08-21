# Copyright Jiaqi Liu
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import json

if __name__ == '__main__':
    with open("german.txt") as quizlet:
        with open("../src/german.js", "w") as f:
            f.write("const vocabulary = [\n")

            for idx, line in enumerate(quizlet):
                word, definition = line.strip().split("\t")
                f.write(
                    json.dumps(
                        {
                            "id": idx + 1,
                            "frontHTML": '<div className=english-side>{0}</div>'.format(word),
                            "backHTML": '<div className=english-side>{0}</div>'.format(definition)
                        },
                        indent=4,
                        ensure_ascii=False
                    )
                    .replace("\"", "")
                    # .replace("english-side", '"english-side"')
                    .replace("english-side", '"english-side"') + ",\n"
                )

            f.write("];\n")
            f.write("export default vocabulary;\n")
