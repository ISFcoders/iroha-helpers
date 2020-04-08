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
