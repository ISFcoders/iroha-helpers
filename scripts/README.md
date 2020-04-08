Run:

bash scripts/{script-name}.sh

bash scripts/protoc-gen-grpc-tool.sh    # generate endpoint.grpc_bp.d.ts and endpoint.grpc_bp.js
bash scripts/protoc-gen-grpc-js-ts.sh    # generate all files *bp.d.ts and *bp.js

https://adnanahmed.info/blog/2019/11/01/grpc-with-nodejs-typescript/


# ./bin/protoc --proto_path=src/proto-src/ --js_out=import_style=commonjs,binary:src/proto src/proto-src/*.proto
------------------------------------------------------------------------------------------------------------------------
# Generate .d.ts and .js files from .proto files:

# Path to this plugin, Note this must be an abolsute path on Windows (see #15)
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to get .proto files
SRC_DIR="./src/proto-src"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/proto"

./bin/protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="service=grpc-web:${OUT_DIR}" \
    --proto_path="${SRC_DIR}" \
    "${SRC_DIR}/"*.proto


------------------------------------------------------------------------------------------------------------------------
# Generate *_grpc.js file from .proto files:

PROTOC_GEN_GRPC_PATH="./node_modules/.bin/protoc-gen-grpc"
# PROTOC_GEN_GRPC_PATH="/home/vk78/Documents/IrohaEVM/Iroha-Helpers/iroha-helpers/node_modules/.bin/protoc-gen-grpc"

# Directory to get .proto files
SRC_DIR="./src/proto-src"
# SRC_DIR="/home/vk78/Documents/IrohaEVM/Iroha-Helpers/iroha-helpers/src/proto-src"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/proto"

# generate js codes
./bin/protoc  \
    --plugin="protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc_out="${OUT_DIR}" \
    --proto_path="${SRC_DIR}" \
    "${SRC_DIR}/"endpoint.proto

------------------------------------------------------------------------------------------------------------------------
# Generate *_grpc.d.ts file from .proto files:

PROTOC_GEN_GRPC_TS_PATH="./node_modules/.bin/protoc-gen-grpc-ts"

# Directory to get .proto files
SRC_DIR="./src/proto-src"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/proto"

# generate ts codes
./bin/protoc  \
    --plugin="protoc-gen-grpc-ts=${PROTOC_GEN_GRPC_TS_PATH}" \
    --proto_path="${SRC_DIR}" \
    --ts_out="service=grpc-node:${OUT_DIR}" \
    "${SRC_DIR}/"endpoint.proto
