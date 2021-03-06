# Generate *_grpc.js file from .proto files:

PROTOC_GEN_GRPC_PATH="./node_modules/.bin/protoc-gen-grpc"
#PROTOC_GEN_GRPC_PATH="/home/vk78/.nvm/versions/node/v11.10.0/bin/protoc-gen-grpc"

# Directory to get .proto files
SRC_DIR="./src/proto-src"
#SRC_DIR="/home/vk78/Documents/IrohaEVM/Iroha-Helpers/iroha-helpers/src/proto-src"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src/proto"

#cat "${SRC_DIR}/"endpoint.proto

# generate js codes
./bin/protoc  \
    --plugin="protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc_out="${OUT_DIR}" \
    --proto_path="${SRC_DIR}" \
    "${SRC_DIR}/"endpoint.proto
