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
