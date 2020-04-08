// package: iroha.protocol
// file: endpoint.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as endpoint_pb from "./endpoint_pb";
import * as transaction_pb from "./transaction_pb";
import * as queries_pb from "./queries_pb";
import * as qry_responses_pb from "./qry_responses_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ICommandService_v1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    torii: ICommandService_v1Service_ITorii;
    listTorii: ICommandService_v1Service_IListTorii;
    status: ICommandService_v1Service_IStatus;
    statusStream: ICommandService_v1Service_IStatusStream;
}

interface ICommandService_v1Service_ITorii extends grpc.MethodDefinition<transaction_pb.Transaction, google_protobuf_empty_pb.Empty> {
    path: string; // "/iroha.protocol.CommandService_v1/Torii"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<transaction_pb.Transaction>;
    requestDeserialize: grpc.deserialize<transaction_pb.Transaction>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICommandService_v1Service_IListTorii extends grpc.MethodDefinition<endpoint_pb.TxList, google_protobuf_empty_pb.Empty> {
    path: string; // "/iroha.protocol.CommandService_v1/ListTorii"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<endpoint_pb.TxList>;
    requestDeserialize: grpc.deserialize<endpoint_pb.TxList>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ICommandService_v1Service_IStatus extends grpc.MethodDefinition<endpoint_pb.TxStatusRequest, endpoint_pb.ToriiResponse> {
    path: string; // "/iroha.protocol.CommandService_v1/Status"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<endpoint_pb.TxStatusRequest>;
    requestDeserialize: grpc.deserialize<endpoint_pb.TxStatusRequest>;
    responseSerialize: grpc.serialize<endpoint_pb.ToriiResponse>;
    responseDeserialize: grpc.deserialize<endpoint_pb.ToriiResponse>;
}
interface ICommandService_v1Service_IStatusStream extends grpc.MethodDefinition<endpoint_pb.TxStatusRequest, endpoint_pb.ToriiResponse> {
    path: string; // "/iroha.protocol.CommandService_v1/StatusStream"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<endpoint_pb.TxStatusRequest>;
    requestDeserialize: grpc.deserialize<endpoint_pb.TxStatusRequest>;
    responseSerialize: grpc.serialize<endpoint_pb.ToriiResponse>;
    responseDeserialize: grpc.deserialize<endpoint_pb.ToriiResponse>;
}

export const CommandService_v1Service: ICommandService_v1Service;

export interface ICommandService_v1Server {
    torii: grpc.handleUnaryCall<transaction_pb.Transaction, google_protobuf_empty_pb.Empty>;
    listTorii: grpc.handleUnaryCall<endpoint_pb.TxList, google_protobuf_empty_pb.Empty>;
    status: grpc.handleUnaryCall<endpoint_pb.TxStatusRequest, endpoint_pb.ToriiResponse>;
    statusStream: grpc.handleServerStreamingCall<endpoint_pb.TxStatusRequest, endpoint_pb.ToriiResponse>;
}

export interface ICommandService_v1Client {
    torii(request: transaction_pb.Transaction, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    torii(request: transaction_pb.Transaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    torii(request: transaction_pb.Transaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listTorii(request: endpoint_pb.TxList, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listTorii(request: endpoint_pb.TxList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    listTorii(request: endpoint_pb.TxList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    status(request: endpoint_pb.TxStatusRequest, callback: (error: grpc.ServiceError | null, response: endpoint_pb.ToriiResponse) => void): grpc.ClientUnaryCall;
    status(request: endpoint_pb.TxStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: endpoint_pb.ToriiResponse) => void): grpc.ClientUnaryCall;
    status(request: endpoint_pb.TxStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: endpoint_pb.ToriiResponse) => void): grpc.ClientUnaryCall;
    statusStream(request: endpoint_pb.TxStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<endpoint_pb.ToriiResponse>;
    statusStream(request: endpoint_pb.TxStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<endpoint_pb.ToriiResponse>;
}

export class CommandService_v1Client extends grpc.Client implements ICommandService_v1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public torii(request: transaction_pb.Transaction, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public torii(request: transaction_pb.Transaction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public torii(request: transaction_pb.Transaction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listTorii(request: endpoint_pb.TxList, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listTorii(request: endpoint_pb.TxList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public listTorii(request: endpoint_pb.TxList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public status(request: endpoint_pb.TxStatusRequest, callback: (error: grpc.ServiceError | null, response: endpoint_pb.ToriiResponse) => void): grpc.ClientUnaryCall;
    public status(request: endpoint_pb.TxStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: endpoint_pb.ToriiResponse) => void): grpc.ClientUnaryCall;
    public status(request: endpoint_pb.TxStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: endpoint_pb.ToriiResponse) => void): grpc.ClientUnaryCall;
    public statusStream(request: endpoint_pb.TxStatusRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<endpoint_pb.ToriiResponse>;
    public statusStream(request: endpoint_pb.TxStatusRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<endpoint_pb.ToriiResponse>;
}

interface IQueryService_v1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    find: IQueryService_v1Service_IFind;
    fetchCommits: IQueryService_v1Service_IFetchCommits;
}

interface IQueryService_v1Service_IFind extends grpc.MethodDefinition<queries_pb.Query, qry_responses_pb.QueryResponse> {
    path: string; // "/iroha.protocol.QueryService_v1/Find"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<queries_pb.Query>;
    requestDeserialize: grpc.deserialize<queries_pb.Query>;
    responseSerialize: grpc.serialize<qry_responses_pb.QueryResponse>;
    responseDeserialize: grpc.deserialize<qry_responses_pb.QueryResponse>;
}
interface IQueryService_v1Service_IFetchCommits extends grpc.MethodDefinition<queries_pb.BlocksQuery, qry_responses_pb.BlockQueryResponse> {
    path: string; // "/iroha.protocol.QueryService_v1/FetchCommits"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<queries_pb.BlocksQuery>;
    requestDeserialize: grpc.deserialize<queries_pb.BlocksQuery>;
    responseSerialize: grpc.serialize<qry_responses_pb.BlockQueryResponse>;
    responseDeserialize: grpc.deserialize<qry_responses_pb.BlockQueryResponse>;
}

export const QueryService_v1Service: IQueryService_v1Service;

export interface IQueryService_v1Server {
    find: grpc.handleUnaryCall<queries_pb.Query, qry_responses_pb.QueryResponse>;
    fetchCommits: grpc.handleServerStreamingCall<queries_pb.BlocksQuery, qry_responses_pb.BlockQueryResponse>;
}

export interface IQueryService_v1Client {
    find(request: queries_pb.Query, callback: (error: grpc.ServiceError | null, response: qry_responses_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    find(request: queries_pb.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: qry_responses_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    find(request: queries_pb.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: qry_responses_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    fetchCommits(request: queries_pb.BlocksQuery, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<qry_responses_pb.BlockQueryResponse>;
    fetchCommits(request: queries_pb.BlocksQuery, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<qry_responses_pb.BlockQueryResponse>;
}

export class QueryService_v1Client extends grpc.Client implements IQueryService_v1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public find(request: queries_pb.Query, callback: (error: grpc.ServiceError | null, response: qry_responses_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public find(request: queries_pb.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: qry_responses_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public find(request: queries_pb.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: qry_responses_pb.QueryResponse) => void): grpc.ClientUnaryCall;
    public fetchCommits(request: queries_pb.BlocksQuery, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<qry_responses_pb.BlockQueryResponse>;
    public fetchCommits(request: queries_pb.BlocksQuery, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<qry_responses_pb.BlockQueryResponse>;
}
