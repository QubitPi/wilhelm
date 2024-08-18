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

import csv
import json

if __name__ == '__main__':
    csv_file = csv.reader(open("greek-core-list.csv"))

    with open("../src/vocabulary.js", "w") as f:
        f.write("const vocabulary = [\n")

        for idx, row in enumerate(csv_file):
            if idx == 0:
                continue
            f.write(
                json.dumps(
                    {
                        "id": idx + 1,
                        "frontHTML": '<div className=greek-side>{0}</div>'.format(row[0]),
                        "backHTML": '<div className=english-side>{0}</div>'.format(row[1])
                    },
                    indent=4,
                    ensure_ascii=False
                )
                        .replace("\"", "")
                        .replace("greek-side", '"greek-side"')
                        .replace("english-side", '"english-side"') + ",\n"
            )

        f.write("];\n")
        f.write("export default vocabulary;\n")
