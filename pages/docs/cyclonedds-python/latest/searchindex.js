Search.setIndex({docnames:["api","cyclonedds.builtin","cyclonedds.core","cyclonedds.domain","cyclonedds.dynamic","cyclonedds.idl","cyclonedds.internal","cyclonedds.pub","cyclonedds.qos","cyclonedds.sub","cyclonedds.topic","cyclonedds.util","idl","index","intro","tools","tools.ddsls","tools.pubsub"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","cyclonedds.builtin.rst","cyclonedds.core.rst","cyclonedds.domain.rst","cyclonedds.dynamic.rst","cyclonedds.idl.rst","cyclonedds.internal.rst","cyclonedds.pub.rst","cyclonedds.qos.rst","cyclonedds.sub.rst","cyclonedds.topic.rst","cyclonedds.util.rst","idl.rst","index.rst","intro.rst","tools.rst","tools.ddsls.rst","tools.pubsub.rst"],objects:{"cyclonedds.builtin":[[1,0,1,"","BuiltinDataReader"],[1,0,1,"","BuiltinTopic"],[1,2,1,"","BuiltinTopicDcpsParticipant"],[1,2,1,"","BuiltinTopicDcpsPublication"],[1,2,1,"","BuiltinTopicDcpsSubscription"],[1,2,1,"","BuiltinTopicDcpsTopic"],[1,0,1,"","DcpsEndpoint"],[1,0,1,"","DcpsParticipant"]],"cyclonedds.builtin.BuiltinDataReader":[[1,1,1,"","__init__"],[1,1,1,"","read"],[1,1,1,"","take"]],"cyclonedds.builtin.DcpsEndpoint":[[1,3,1,"","key"],[1,3,1,"","participant_instance_handle"],[1,3,1,"","participant_key"],[1,3,1,"","qos"],[1,3,1,"","topic_name"],[1,3,1,"","type_name"],[1,3,1,"","typeid"]],"cyclonedds.builtin.DcpsParticipant":[[1,3,1,"","key"],[1,3,1,"","qos"]],"cyclonedds.core":[[2,0,1,"","DDSException"],[2,0,1,"","DDSStatus"],[2,0,1,"","Entity"],[2,0,1,"","GuardCondition"],[2,0,1,"","InstanceState"],[2,0,1,"","Listener"],[8,0,1,"","Policy"],[8,0,1,"","Qos"],[2,0,1,"","QueryCondition"],[2,0,1,"","ReadCondition"],[2,0,1,"","SampleState"],[2,0,1,"","ViewState"],[2,0,1,"","WaitSet"]],"cyclonedds.core.DDSException":[[2,3,1,"","DDS_RETCODE_ALREADY_DELETED"],[2,3,1,"","DDS_RETCODE_BAD_PARAMETER"],[2,3,1,"","DDS_RETCODE_ERROR"],[2,3,1,"","DDS_RETCODE_ILLEGAL_OPERATION"],[2,3,1,"","DDS_RETCODE_IMMUTABLE_POLICY"],[2,3,1,"","DDS_RETCODE_INCONSISTENT_POLICY"],[2,3,1,"","DDS_RETCODE_NOT_ALLOWED_BY_SECURITY"],[2,3,1,"","DDS_RETCODE_NOT_ENABLED"],[2,3,1,"","DDS_RETCODE_NO_DATA"],[2,3,1,"","DDS_RETCODE_OK"],[2,3,1,"","DDS_RETCODE_OUT_OF_RESOURCES"],[2,3,1,"","DDS_RETCODE_PRECONDITION_NOT_MET"],[2,3,1,"","DDS_RETCODE_TIMEOUT"],[2,3,1,"","DDS_RETCODE_UNSUPPORTED"],[2,3,1,"","code"],[2,3,1,"","error_message_mapping"],[2,3,1,"","msg"]],"cyclonedds.core.DDSStatus":[[2,3,1,"","DataAvailable"],[2,3,1,"","DataOnReaders"],[2,3,1,"","InconsistentTopic"],[2,3,1,"","LivelinessChanged"],[2,3,1,"","LivelinessLost"],[2,3,1,"","OfferedDeadlineMissed"],[2,3,1,"","OfferedIncompatibleQos"],[2,3,1,"","PublicationMatched"],[2,3,1,"","RequestedDeadlineMissed"],[2,3,1,"","RequestedIncompatibleQos"],[2,3,1,"","SampleLost"],[2,3,1,"","SampleRejected"],[2,3,1,"","SubscriptionMatched"]],"cyclonedds.core.Entity":[[2,1,1,"","__init__"],[2,1,1,"","begin_coherent"],[2,3,1,"","children"],[2,3,1,"","datareader"],[2,3,1,"","domain_id"],[2,1,1,"","end_coherent"],[2,1,1,"","get_children"],[2,1,1,"","get_datareader"],[2,1,1,"","get_domain_id"],[2,1,1,"","get_entity"],[2,1,1,"","get_guid"],[2,1,1,"","get_instance_handle"],[2,1,1,"","get_listener"],[2,1,1,"","get_parent"],[2,1,1,"","get_participant"],[2,1,1,"","get_publisher"],[2,1,1,"","get_qos"],[2,1,1,"","get_status_changes"],[2,1,1,"","get_status_mask"],[2,1,1,"","get_subscriber"],[2,3,1,"","guid"],[2,4,1,"","instance_handle"],[2,3,1,"","parent"],[2,3,1,"","participant"],[2,3,1,"","publisher"],[2,1,1,"","read_status"],[2,1,1,"","set_listener"],[2,1,1,"","set_qos"],[2,1,1,"","set_status_mask"],[2,3,1,"","status_mask"],[2,3,1,"","subscriber"],[2,1,1,"","take_status"]],"cyclonedds.core.GuardCondition":[[2,1,1,"","__init__"],[2,1,1,"","read"],[2,1,1,"","set"],[2,1,1,"","take"]],"cyclonedds.core.InstanceState":[[2,3,1,"","Alive"],[2,3,1,"","Any"],[2,3,1,"","NotAliveDisposed"],[2,3,1,"","NotAliveNoWriters"]],"cyclonedds.core.Listener":[[2,1,1,"","__init__"],[2,1,1,"","copy"],[2,1,1,"","copy_to"],[2,1,1,"","merge"],[2,1,1,"","on_data_available"],[2,1,1,"","on_data_on_readers"],[2,1,1,"","on_inconsistent_topic"],[2,1,1,"","on_liveliness_changed"],[2,1,1,"","on_liveliness_lost"],[2,1,1,"","on_offered_deadline_missed"],[2,1,1,"","on_offered_incompatible_qos"],[2,1,1,"","on_publication_matched"],[2,1,1,"","on_requested_deadline_missed"],[2,1,1,"","on_requested_incompatible_qos"],[2,1,1,"","on_sample_lost"],[2,1,1,"","on_sample_rejected"],[2,1,1,"","on_subscription_matched"],[2,1,1,"","reset"],[2,1,1,"","set_on_data_available"],[2,1,1,"","set_on_data_on_readers"],[2,1,1,"","set_on_inconsistent_topic"],[2,1,1,"","set_on_liveliness_changed"],[2,1,1,"","set_on_liveliness_lost"],[2,1,1,"","set_on_offered_deadline_missed"],[2,1,1,"","set_on_offered_incompatible_qos"],[2,1,1,"","set_on_publication_matched"],[2,1,1,"","set_on_requested_deadline_missed"],[2,1,1,"","set_on_requested_incompatible_qos"],[2,1,1,"","set_on_sample_lost"],[2,1,1,"","set_on_sample_rejected"],[2,1,1,"","set_on_subscription_matched"]],"cyclonedds.core.Policy":[[8,0,1,"","BinaryProperty"],[8,0,1,"","DataRepresentation"],[8,0,1,"","Deadline"],[8,0,1,"","DestinationOrder"],[8,0,1,"","Durability"],[8,0,1,"","DurabilityService"],[8,0,1,"","EntityName"],[8,0,1,"","Groupdata"],[8,0,1,"","History"],[8,0,1,"","IgnoreLocal"],[8,0,1,"","LatencyBudget"],[8,0,1,"","Lifespan"],[8,0,1,"","Liveliness"],[8,0,1,"","Ownership"],[8,0,1,"","OwnershipStrength"],[8,0,1,"","Partition"],[8,0,1,"","PresentationAccessScope"],[8,0,1,"","Property"],[8,0,1,"","ReaderDataLifecycle"],[8,0,1,"","Reliability"],[8,0,1,"","ResourceLimits"],[8,0,1,"","TimeBasedFilter"],[8,0,1,"","Topicdata"],[8,0,1,"","TransportPriority"],[8,0,1,"","TypeConsistency"],[8,0,1,"","Userdata"],[8,0,1,"","WriterDataLifecycle"]],"cyclonedds.core.Policy.Deadline":[[8,3,1,"","deadline"]],"cyclonedds.core.Policy.DurabilityService":[[8,3,1,"","cleanup_delay"],[8,3,1,"","history"],[8,3,1,"","max_instances"],[8,3,1,"","max_samples"],[8,3,1,"","max_samples_per_instance"]],"cyclonedds.core.Policy.History":[[8,3,1,"","KeepAll"],[8,3,1,"","KeepLast"]],"cyclonedds.core.Policy.Lifespan":[[8,3,1,"","lifespan"]],"cyclonedds.core.Policy.Liveliness":[[8,3,1,"","Automatic"],[8,3,1,"","ManualByParticipant"],[8,3,1,"","ManualByTopic"]],"cyclonedds.core.Policy.Ownership":[[8,3,1,"","Exclusive"],[8,3,1,"","Shared"]],"cyclonedds.core.Policy.Partition":[[8,3,1,"","partitions"]],"cyclonedds.core.Policy.PresentationAccessScope":[[8,3,1,"","Group"],[8,3,1,"","Instance"],[8,3,1,"","Topic"]],"cyclonedds.core.Policy.ReaderDataLifecycle":[[8,3,1,"","autopurge_disposed_samples_delay"],[8,3,1,"","autopurge_nowriter_samples_delay"]],"cyclonedds.core.Policy.Reliability":[[8,3,1,"","Reliable"]],"cyclonedds.core.Policy.ResourceLimits":[[8,3,1,"","max_instances"],[8,3,1,"","max_samples"],[8,3,1,"","max_samples_per_instance"]],"cyclonedds.core.Policy.TimeBasedFilter":[[8,3,1,"","filter_time"]],"cyclonedds.core.Policy.TransportPriority":[[8,3,1,"","priority"]],"cyclonedds.core.Policy.TypeConsistency":[[8,3,1,"","AllowTypeCoercion"],[8,3,1,"","DisallowTypeCoercion"]],"cyclonedds.core.Policy.WriterDataLifecycle":[[8,3,1,"","autodispose"]],"cyclonedds.core.Qos":[[8,1,1,"","__init__"],[8,1,1,"","asdict"],[8,1,1,"","fromdict"],[8,3,1,"","policies"]],"cyclonedds.core.QueryCondition":[[2,1,1,"","__init__"]],"cyclonedds.core.ReadCondition":[[2,1,1,"","__init__"]],"cyclonedds.core.SampleState":[[2,3,1,"","Any"],[2,3,1,"","NotRead"],[2,3,1,"","Read"]],"cyclonedds.core.ViewState":[[2,3,1,"","Any"],[2,3,1,"","New"],[2,3,1,"","Old"]],"cyclonedds.core.WaitSet":[[2,1,1,"","__init__"],[2,1,1,"","attach"],[2,1,1,"","detach"],[2,1,1,"","get_entities"],[2,1,1,"","is_attached"],[2,1,1,"","set_trigger"],[2,1,1,"","wait"],[2,1,1,"","wait_async"],[2,1,1,"","wait_until"]],"cyclonedds.domain":[[3,0,1,"","Domain"],[3,0,1,"","DomainParticipant"]],"cyclonedds.domain.Domain":[[3,1,1,"","get_participants"]],"cyclonedds.dynamic":[[4,5,1,"","async_get_types_for_typeid"],[4,5,1,"","get_types_for_typeid"]],"cyclonedds.idl":[[5,0,1,"","IdlBitmask"],[5,0,1,"","IdlEnum"],[5,0,1,"","IdlStruct"],[5,0,1,"","IdlUnion"]],"cyclonedds.idl.IdlBitmask":[[5,1,1,"","as_mask"],[5,1,1,"","from_mask"]],"cyclonedds.idl.IdlStruct":[[5,1,1,"","deserialize"],[5,1,1,"","serialize"]],"cyclonedds.idl.IdlUnion":[[5,1,1,"","deserialize"],[5,4,1,"","discriminator"],[5,1,1,"","get"],[5,1,1,"","serialize"],[5,1,1,"","set"],[5,4,1,"","value"]],"cyclonedds.idl.annotations":[[5,5,1,"","appendable"],[5,5,1,"","autoid"],[5,5,1,"","bit_bound"],[5,5,1,"","cdrv0"],[5,5,1,"","extensibility"],[5,5,1,"","final"],[5,5,1,"","key"],[5,5,1,"","keylist"],[5,5,1,"","member_hash_id"],[5,5,1,"","member_id"],[5,5,1,"","must_understand"],[5,5,1,"","mutable"],[5,5,1,"","nested"],[5,5,1,"","position"],[5,5,1,"","xcdrv2"]],"cyclonedds.idl.types":[[5,2,1,"","NoneType"],[5,0,1,"","array"],[5,0,1,"","bounded_str"],[5,0,1,"","case"],[5,2,1,"","char"],[5,0,1,"","default"],[5,2,1,"","float32"],[5,2,1,"","float64"],[5,2,1,"","int16"],[5,2,1,"","int32"],[5,2,1,"","int64"],[5,2,1,"","int8"],[5,0,1,"","sequence"],[5,0,1,"","typedef"],[5,2,1,"","uint16"],[5,2,1,"","uint32"],[5,2,1,"","uint64"],[5,2,1,"","uint8"]],"cyclonedds.internal":[[6,0,1,"","DDS"],[6,0,1,"","SampleInfo"],[6,5,1,"","c_call"],[6,5,1,"","c_callable"],[6,0,1,"","dds_c_t"],[6,5,1,"","load_cyclonedds"]],"cyclonedds.internal.SampleInfo":[[6,3,1,"","instance_handle"],[6,3,1,"","instance_state"],[6,3,1,"","sample_state"],[6,3,1,"","source_timestamp"],[6,3,1,"","view_state"]],"cyclonedds.internal.dds_c_t":[[6,3,1,"","attach"],[6,3,1,"","data_representation_id"],[6,3,1,"","destination_order"],[6,3,1,"","domainid"],[6,3,1,"","durability"],[6,3,1,"","duration"],[6,3,1,"","entity"],[6,0,1,"","guid"],[6,3,1,"","history"],[6,0,1,"","inconsistent_topic_status"],[6,3,1,"","ingnorelocal"],[6,3,1,"","instance_handle"],[6,3,1,"","instance_state"],[6,3,1,"","listener_p"],[6,3,1,"","liveliness"],[6,0,1,"","liveliness_changed_status"],[6,0,1,"","liveliness_lost_status"],[6,0,1,"","offered_deadline_missed_status"],[6,0,1,"","offered_incompatible_qos_status"],[6,3,1,"","ownership"],[6,3,1,"","presentation_access_scope"],[6,0,1,"","publication_matched_status"],[6,3,1,"","qos_p"],[6,3,1,"","reliability"],[6,0,1,"","requested_deadline_missed_status"],[6,0,1,"","requested_incompatible_qos_status"],[6,3,1,"","returnv"],[6,0,1,"","sample_buffer"],[6,0,1,"","sample_info"],[6,0,1,"","sample_lost_status"],[6,0,1,"","sample_rejected_status"],[6,3,1,"","sample_state"],[6,0,1,"","subscription_matched_status"],[6,3,1,"","time"],[6,3,1,"","topic_descriptor_p"],[6,3,1,"","type_consistency"],[6,3,1,"","view_state"]],"cyclonedds.internal.dds_c_t.guid":[[6,1,1,"","as_python_guid"],[6,3,1,"","v"]],"cyclonedds.internal.dds_c_t.inconsistent_topic_status":[[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.liveliness_changed_status":[[6,3,1,"","alive_count"],[6,3,1,"","alive_count_change"],[6,3,1,"","last_publication_handle"],[6,3,1,"","not_alive_count"],[6,3,1,"","not_alive_count_change"]],"cyclonedds.internal.dds_c_t.liveliness_lost_status":[[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.offered_deadline_missed_status":[[6,3,1,"","last_instance_handle"],[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.offered_incompatible_qos_status":[[6,3,1,"","last_policy_id"],[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.publication_matched_status":[[6,3,1,"","current_count"],[6,3,1,"","current_count_change"],[6,3,1,"","last_subscription_handle"],[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.requested_deadline_missed_status":[[6,3,1,"","last_instance_handle"],[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.requested_incompatible_qos_status":[[6,3,1,"","last_policy_id"],[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.sample_buffer":[[6,3,1,"","buf"],[6,3,1,"","len"]],"cyclonedds.internal.dds_c_t.sample_info":[[6,3,1,"","absolute_generation_rank"],[6,3,1,"","disposed_generation_count"],[6,3,1,"","generation_rank"],[6,3,1,"","instance_handle"],[6,3,1,"","instance_state"],[6,3,1,"","no_writers_generation_count"],[6,3,1,"","publication_handle"],[6,3,1,"","sample_rank"],[6,3,1,"","sample_state"],[6,3,1,"","source_timestamp"],[6,3,1,"","valid_data"],[6,3,1,"","view_state"]],"cyclonedds.internal.dds_c_t.sample_lost_status":[[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.sample_rejected_status":[[6,3,1,"","last_instance_handle"],[6,3,1,"","last_reason"],[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.internal.dds_c_t.subscription_matched_status":[[6,3,1,"","current_count"],[6,3,1,"","current_count_change"],[6,3,1,"","last_publication_handle"],[6,3,1,"","total_count"],[6,3,1,"","total_count_change"]],"cyclonedds.pub":[[7,0,1,"","DataWriter"],[7,0,1,"","Publisher"]],"cyclonedds.pub.DataWriter":[[7,1,1,"","dispose"],[7,1,1,"","dispose_instance_handle"],[7,1,1,"","lookup_instance"],[7,1,1,"","register_instance"],[7,4,1,"","topic"],[7,1,1,"","unregister_instance"],[7,1,1,"","unregister_instance_handle"],[7,1,1,"","wait_for_acks"],[7,1,1,"","write"],[7,1,1,"","write_dispose"]],"cyclonedds.pub.Publisher":[[7,1,1,"","resume"],[7,1,1,"","suspend"],[7,1,1,"","wait_for_acks"]],"cyclonedds.sub":[[9,0,1,"","DataReader"],[9,0,1,"","Subscriber"]],"cyclonedds.sub.DataReader":[[9,1,1,"","lookup_instance"],[9,1,1,"","read"],[9,1,1,"","read_aiter"],[9,1,1,"","read_iter"],[9,1,1,"","read_next"],[9,1,1,"","read_one"],[9,1,1,"","take"],[9,1,1,"","take_aiter"],[9,1,1,"","take_iter"],[9,1,1,"","take_next"],[9,1,1,"","take_one"],[9,4,1,"","topic"],[9,1,1,"","wait_for_historical_data"]],"cyclonedds.sub.Subscriber":[[9,1,1,"","notify_readers"]],"cyclonedds.topic":[[10,0,1,"","Topic"]],"cyclonedds.topic.Topic":[[10,1,1,"","get_name"],[10,1,1,"","get_type_name"],[10,4,1,"","name"],[10,4,1,"","typename"]],"cyclonedds.util":[[11,5,1,"","duration"],[11,5,1,"","isgoodentity"]],"cyclonedds.util.timestamp":[[11,5,1,"","now"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","data","Python data"],"3":["py","attribute","Python attribute"],"4":["py","property","Python property"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:data","3":"py:attribute","4":"py:property","5":"py:function"},terms:{"0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"0000ff":12,"02371001":16,"0c8d":16,"0cb8":16,"1":[1,2,8,9,12,16,17],"10":[2,8,11,12,15,16,17],"100":[8,17],"1000":17,"10000":16,"100000000":16,"11":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"11822753457071331301":16,"12":[2,12],"123":17,"13":2,"14":2,"14be":16,"16":5,"1d681001":16,"1fe3":16,"2":[2,8,11,17],"20":[8,12,16,17],"200":8,"2000":8,"2022":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"20a3000001c1":16,"2236347693610277994":16,"25":8,"256":10,"2709":16,"2e4d":16,"3":[2,12,13,14,16,17],"305c":16,"32":5,"325a":16,"32bit":5,"33":17,"350c1001":16,"4":[2,12,17],"420":17,"4428":16,"46f4000001c1":16,"48b3000001c1":16,"49db":16,"4edb":16,"5":[2,8,12,14,17],"52f100000102":16,"52f1000001c1":16,"53dd":16,"5468":16,"5513147631977453825":16,"5dc81001":16,"5fb900000102":16,"6":2,"64":[5,12],"647f000001c1":16,"64bit":5,"68a5":16,"7":[2,13,14],"712a":16,"713b1001":16,"75dc":16,"764e1001":16,"77b3":16,"7b68":16,"8":[2,5,12,17],"8251":16,"8ac9":16,"8e281001":16,"9":[2,12],"9223372036854775807":16,"926f":16,"9ce21001":16,"9f2a":16,"abstract":13,"boolean":[2,8,17],"byte":[5,8,12,17],"case":[5,12,17],"char":5,"class":[1,2,3,5,6,7,8,9,10,12,14],"default":[2,5,11,12,16,17],"do":[2,8,12,17],"enum":[5,12],"final":[5,14],"float":[5,11],"function":[1,2,6,7,8,11,12],"import":[12,14,16],"int":[1,2,3,4,5,6,7,8,9,11,12],"long":[16,17],"new":[1,2,16],"public":[1,16,17],"return":[1,2,3,4,5,6,7,8,9,10,11,12],"static":[2,8],"switch":12,"transient":[8,16,17],"true":[2,5,8,16,17],"try":[2,17],"void":5,"while":13,A:[2,3,5,8],And:[14,16,17],As:[6,12],At:[12,14],But:16,By:[2,12,16,17],For:[2,12,14,15,16,17],If:[1,2,4,8,9,12,14,16,17],In:[5,11,12,13,16,17],It:[2,3,8,13,17],Not:[2,12],ON:1,On:3,One:2,The:[1,2,3,5,6,7,8,9,11,12,13,14,16,17],Then:16,There:[12,15,16,17],These:[12,13,14,15],To:[8,12,14,16,17],With:[14,15],__annotations__:12,__idl_annotations__:12,__idl_field_annotations__:12,__init__:[1,2,8],__post_init__:12,_condit:2,_ddsi_xt_type_object:[1,4],_ref:1,_s:10,_support:5,_t:[7,9],_ti:5,_tib:5,_tiu:5,_typesupport:[1,4],a889:16,ab06000001c1:16,abl:[12,17],about:[6,14],abov:16,absolut:2,absolute_generation_rank:6,abstim:2,accept:2,access:[2,8,12,13],accord:[2,16,17],achiev:12,acknowledg:7,activ:[2,12,16],actual:[8,14],ad00:16,ad:[1,2],adb500000102:16,adb5000001c1:16,add:[2,12,14],addit:[2,14,16,17],aef6:16,affect:2,after:[2,16,17],again:[2,8,12,14],alia:[5,6,8],aliv:[2,16],alive_count:6,alive_count_chang:6,all:[2,3,4,6,7,8,9,12,13,16,17],allow:[3,8,12,14,16],allowtypecoercion:8,almost:[2,12,13,14],alreadi:[2,12,16],also:[7,12,15,16,17],alwai:[11,12],amount:[2,5],an:[1,2,3,5,7,8,9,11,12,14,15,16,17],ani:[1,2,3,5,8,9,12,13,14,17],annot:[6,9,13],announc:14,anoth:[8,16],answer:13,anystr:10,anyth:14,api:[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17],appear:[1,4],append:5,appli:[2,12,16,17],applic:[2,3,8,12,13,15,17],apply_to:5,appropri:14,aquir:2,ar:[1,2,3,5,8,9,11,12,13,14,15,16,17],arbitrari:17,arg:5,argument:[12,16,17],argument_typ:6,arrai:[5,12,17],arriv:15,as_mask:5,as_python_guid:6,asdict:8,asid:12,ask:13,assert:12,associ:[1,2,6,7],async:[2,4,9],async_get_types_for_typeid:4,asyncgener:9,asynchron:2,atom:2,attach:[2,6],attempt:[2,4],attribut:9,auto:12,autodispos:[8,16,17],autoid:5,autoid_typ:5,automat:[8,12,16,17],autopurge_disposed_samples_delai:[8,16,17],autopurge_nowriter_samples_delai:[8,16,17],avail:[2,12,13,15,17],avoid:2,awai:2,b:[8,16,17],backend:12,background:15,bad:2,bar:12,base:[1,2,3,5,6,7,8,9,10,12],basepolici:8,basic:12,baz:12,bb82:16,becaus:2,becom:2,been:[1,2,16],befor:[2,12],beforehand:12,begin:2,begin_coher:2,behav:2,behaviour:1,being:[2,16],belong:[1,2],below:15,besid:16,best:17,besteffort:[8,16,17],better:[13,16],between:[8,17],binari:14,binaryproperti:8,bind:13,bit:[2,5,12],bit_bound:5,block:[1,2,7,9],blue:12,bool:[2,5,6,7,8,9,11],both:12,bound:12,bounded_str:[5,12],briefli:12,budget:[8,16,17],buf:6,buffer:5,bug:13,build:[2,12,14,15],built:[1,8,12,14,16],builtin:[0,12,13],builtin_top:1,builtindataread:1,builtintop:1,builtintopicdcpsparticip:[1,16],builtintopicdcpspubl:[1,16],builtintopicdcpssubscript:1,builtintopicdcpstop:1,builtintopicsubscript:16,byreceptiontimestamp:[8,16,17],bysourcetimestamp:[8,17],c040:16,c5e3:16,c:[2,5,6,12,13,14],c_call:6,c_callabl:6,c_int:6,c_long:6,c_short:6,c_uint:6,c_void_p:6,ca0b:16,ca6b:16,cad5000001c1:16,call:[2,6,7,9,15],callabl:[2,5],callback:2,came:12,can:[1,2,4,5,8,12,14,15,16,17],cannot:14,care:13,caus:2,caveat:14,cd:14,cdll:6,cdrv0:5,central:[3,8],certain:17,cfunctyp:6,chang:[2,8,16,17],charact:5,check:[2,8,11,12,16,17],children:2,choos:[16,17],cl:[5,12],classmethod:[2,5,8,12],cleanup_delai:[8,16,17],client:12,clone:14,cloud:12,cmake:12,code:[1,2,9,12],coher:2,coherent_access:[8,16,17],coin:12,collect:[2,8],colon:17,colourmap:12,com:14,come:14,comma:17,command:[13,14],committ:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],common:6,comparison:8,compat:[12,15,17],compil:[4,14],complet:[1,16],complex:14,complic:12,compon:14,condit:[1,2,9],config:[1,3],configur:[2,3,6,14,17],confirm:2,consid:2,consist:8,constant:[2,12],construct:[2,8,12],contain:[2,6,8,11,12,14],content:[8,12],context:12,control:12,convert:[1,2,6,8,9],copi:2,copy_to:2,core:[0,1,3,7,9,10,13],corsaro:12,could:2,coupl:14,cours:12,creat:[1,2,12,16],creation:[4,14],credenti:2,ctype:6,current:[2,11,12,14,16],current_count:6,current_count_chang:6,custom:[16,17],cyclon:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17],cyclonedd:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],cyclonedds_hom:14,d195000001c1:16,d9da:16,da531001:16,dai:[11,17],data:[1,2,5,6,7,8,9,12,15,16],data_representation_id:6,data_typ:[1,10],dataavail:2,dataclass:[12,14],dataonread:2,dataread:[1,2,9,14,17],datarepresent:8,datastructur:14,datatyp:[5,13,14,15,17],datawrit:[2,7,14,17],dcpsendpoint:1,dcpsparticip:[1,16],dcpspublic:16,dcpssubscript:16,dd:[0,1,2,3,4,5,6,7,8,9,10,11,12,15,16,17],dds_c_t:[2,6],dds_duration_t:11,dds_retcode_:2,dds_retcode_already_delet:2,dds_retcode_bad_paramet:2,dds_retcode_error:2,dds_retcode_illegal_oper:2,dds_retcode_immutable_polici:2,dds_retcode_inconsistent_polici:2,dds_retcode_no_data:2,dds_retcode_not_allowed_by_secur:2,dds_retcode_not_en:2,dds_retcode_ok:2,dds_retcode_out_of_resourc:2,dds_retcode_precondition_not_met:2,dds_retcode_timeout:2,dds_retcode_unsupport:2,dds_time_t:11,ddsexcept:[1,2,4,9],ddsl:15,ddsls_data:16,ddsperf:15,ddsstatu:2,de:12,deadlin:[8,16,17],deadlock:2,debug:[8,12],decor:[6,12],defin:[12,14,16,17],delet:2,delv:12,denable_topic_discoveri:1,depend:[2,14,15],depth:[8,13,16,17],describ:8,descript:[2,8,12],deseri:[5,12],design:13,desir:17,destination_ord:6,destinationord:[8,16,17],detach:2,detail:[2,12],detect:17,determin:12,dev:14,diamond:12,dict:[4,8,12],dictionari:[8,16],did:14,differ:[1,12],differenti:12,direct:12,directli:[2,12,14],directori:[14,16],dirti:13,disallowtypecoercion:8,discov:15,discoveri:1,discrimin:[5,12],discriminator_valu:5,disk:8,dispatch:2,displai:16,dispos:[2,7,16],dispose_instance_handl:7,disposed_generation_count:6,divid:16,dll:6,doc:14,document:[2,12,14],doe:[2,4,8,9,14],doesn:2,domain:[0,1,2,4,7,9,10,13,14],domain_id:[2,3],domain_particip:[2,7,9,10],domainid:6,domainparticip:[1,2,3,4,7,9,10,14,16],don:[2,14],doubl:12,down:16,dp:16,durabilityservic:[8,16,17],durabl:[6,8,16,17],durat:[2,6,7,8,11,14,17],dure:12,dynam:[0,6,13,15],e010:16,e15c:16,e4921001:16,e:17,each:15,easi:[8,13,14],east:12,eclips:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17],ecosystem:12,ee0900000107:16,ee09000001c1:16,effort:17,either:[7,12],elaps:7,els:7,elsewher:11,emploi:12,empti:2,enabl:[2,6,16],enable_type_discoveri:4,enabletopicdiscoveryendpoint:1,encod:[5,12],end:[2,17],end_coher:2,endian:5,endpoint:1,entit:17,entiti:[2,3,6,7,8,9,10,11,15,16],entity_id:2,entitynam:8,entityqo:17,entri:14,entrypoint:3,enumer:5,environ:14,epoch:[7,11],eqo:17,equal:12,equival:12,error:[1,2,9,12,14],error_message_map:2,etc:[2,17],even:12,event:[2,16],eventu:[12,13],everi:9,exact:12,exactli:9,exampl:[2,8,11,12,13,15,16,17],except:[1,2,9,11,12,14],exclus:[8,17],execut:2,exhaust:12,exist:[2,12,15,17],exit:[14,16,17],expect:2,experiment:13,expir:[8,9],explain:[16,17],explicitli:2,express:[11,12,14],extens:5,extensibility_typ:5,f:[8,14,16,17],fact:2,factori:12,fail:[1,2],fals:[2,8,11,16,17],familiar:12,featur:[2,14,15],few:14,ff0000:12,field:[2,12,16],file:12,filenam:[16,17],filter:2,filter_fn:8,filter_tim:[8,16,17],find:[2,12],fine:12,first:[7,13],five:14,float128:12,float32:[5,12],float64:[5,12],follow:[5,12,16,17],foo:12,form:2,format:[2,7,8,11,16,17],four:15,freed:2,freedom:17,frequent:13,from:[2,7,8,9,11,12,14,15,16,17],from_mask:5,fromdict:8,frontend:15,fruzzi:12,full:[5,8,12,15,16],fulli:[8,13],further:[16,17],furthermor:2,futur:[2,17],g:17,gain:12,garbag:2,gather:4,gener:[7,8,9,10,12,14],generation_rank:6,get:[2,3,5,10,12,14,15,16],get_children:2,get_dataread:2,get_domain_id:2,get_ent:2,get_guid:2,get_instance_handl:2,get_listen:2,get_nam:10,get_par:2,get_particip:[2,3],get_publish:2,get_qo:2,get_status_chang:2,get_status_mask:2,get_subscrib:2,get_type_nam:10,get_types_for_typeid:4,gil:2,git:14,github:[13,14],given:[2,7],global:[2,16],go:[12,13,14],goe:2,good:11,group:[8,16,17],groupdata:[8,17],guarante:[3,8],guardcondit:2,guid:[2,6,16],h:[16,17],ha:[1,2,12,14,16,17],had:16,hand:13,handl:[1,2,6,7,16],happen:[1,2,7,12,15,16],hard:14,has_head:5,hassl:13,have:[1,2,11,12,13,14,16,17],hello:[8,17],helloword:17,helloworld:17,help:[15,16,17],helper:[8,11,12],here:[12,13,15,16],hidden:12,higher:14,hint:[12,13],histori:[6,8,16,17],hood:[12,13,14],host:[8,15],hour:11,how:[8,16,17],howev:[12,14,16,17],http:14,human:[2,7,8,11],hurrai:14,hurt:2,i:[8,16],iceoryx:14,id:[2,3,12,13],ident:1,identifi:[1,2,16],idl:[0,1,4,13,14,15],idlbitmask:[4,5],idlc:12,idlenum:[4,5],idlpi:12,idlstruct:[4,5,12,14],idlunion:[4,5,12],ignor:[2,17],ignoreloc:[8,16,17],immut:[2,8,12],implement:[5,12],inapplicableqoswarn:17,includ:5,incompatibleqoswarn:17,inconsist:2,inconsistent_topic_statu:[2,6],inconsistenttop:2,indefinit:[16,17],index:13,indic:[2,5,12,16,17],infin:2,infinit:11,inform:[4,6,12,13,16],ingnoreloc:6,inherit:[8,12],initi:[1,2,8,12],input:14,insensit:17,insid:[2,4,12],inspect:[8,12],instal:[12,15],instanc:[1,2,6,7,8,12,16,17],instance_handl:[2,6,9],instance_st:6,instancest:[2,6,7],instanti:[2,8],instead:[1,16],insuffici:2,int128:12,int16:[5,12],int32:[5,12],int64:[5,12],int8:[5,12],int_arrai:17,intarrai:17,integ:[2,3,5,8,17],integr:12,intend:12,interact:[12,13],interest:[1,9],intern:[0,2,11,13],interoper:12,interrupt:[16,17],introduc:12,introduct:13,intsequ:17,invalid:2,invok:2,involv:4,io:13,is_attach:2,isgoodent:11,issu:13,item:[5,12],iter:[8,9],its:[2,7],j:16,join:14,json:17,jump:12,just:[2,12,14,16],keep:17,keepal:[8,17],keeplast:[8,16,17],kei:[1,5,6,8,12,16],keylist:[5,12],keyval:17,kind:2,know:16,known:[12,14],kwarg:[2,5,8],l:[12,17],lack:2,lambda:2,languag:12,last:[2,17],last_instance_handl:6,last_policy_id:6,last_publication_handl:6,last_reason:6,last_subscription_handl:6,latenc:8,latencybudget:[2,8,16,17],layer:5,ld_library_path:12,lease_dur:[8,16,17],legaci:13,len:[6,8],length:[5,12],let:[11,14],level:[8,13],leverag:[12,14],librari:[5,6,12,14],lifespan:[8,16,17],lifetim:2,like:[12,16,17],limit:[2,12,16,17],line:13,link:[2,14],list:[2,3,5,8,9],list_of_kei:5,listen:[1,2,3,7,9,10,14],listener_p:6,live:11,liveli:[2,6,8,16,17],liveliness_changed_statu:[2,6],liveliness_lost_statu:[2,6],livelinesschang:2,livelinesslost:2,load:[6,8,14],load_cyclonedd:6,local:3,locat:[12,14],logic:3,longer:16,look:[12,13,16,17],lookup_inst:[7,9],loop:2,love:13,m:14,machineri:12,made:2,magic:[1,6],mai:[2,9,17],main:[4,15],make:[1,2,6,12,14],manag:[13,14],manner:15,manual:[2,12,14,17],manualbyparticip:[8,17],manualbytop:[8,17],map:[5,12],mark:7,mask:[2,5],match:[4,7,8],max:8,max_blocking_tim:[8,16,17],max_inst:[8,16,17],max_length:5,max_sampl:[8,16,17],max_samples_per_inst:[8,16,17],max_siz:10,maxfournumb:12,maximum:[1,2,7,9,12],maxlen:12,mean:[2,5,12,14,16],meant:6,mechan:[12,14],member:[6,12],member_hash_id:5,member_id:5,memori:[2,13,14],merg:[2,15],messag:[12,14,16,17],messagetop:16,met:2,method:[2,6,9,12],microsecond:11,might:[4,12,13],millisecond:11,minimum:8,minut:[8,11,14,17],mix:3,mode:15,modern:13,modif:2,modifi:[2,8,17],modul:[6,11,12,14],monitor:16,more:[2,3,9,12,15],most:12,msg:[2,14],multipl:[9,14,17],must:12,must_understand:5,mutabl:5,my:12,n:[1,9,12,17],name:[1,4,5,6,8,10,12,14,15,16,17],nanosecond:[2,6,7,8,11],ncaptain:12,necessari:4,necessarili:14,need:[2,8,12,14,16,17],nest:[4,5,12],network:[1,3,4,12,14],never:[2,3,8,11,12],newli:[2,8],next:2,nice:12,nicer:15,nightli:13,no_writers_generation_count:6,non:[1,2,9,12,14],none:[1,2,3,5,6,7,8,9,10],nonetyp:5,normal:[1,12],north:12,not_alive_count:6,not_alive_count_chang:6,notalivedispos:[2,7],notalivenowrit:2,note:[1,2,8,12,15],noth:[3,8,16,17],notify_read:9,notread:2,now:[11,12,14,17],nsign:12,number:[1,2,5,7,8,9,11,12,17],o:17,object:[2,5,8,11,13],obtain:8,occur:[2,16],occurr:2,off:17,offer:17,offered_deadline_missed_statu:[2,6],offered_incompatible_qos_statu:[2,6],offereddeadlinemiss:2,offeredincompatibleqo:2,offici:12,old:[2,16],omg:[5,12,14],on_data_avail:2,on_data_on_read:2,on_inconsistent_top:2,on_liveliness_chang:2,on_liveliness_lost:2,on_offered_deadline_miss:2,on_offered_incompatible_qo:2,on_publication_match:2,on_requested_deadline_miss:2,on_requested_incompatible_qo:2,on_sample_lost:2,on_sample_reject:2,on_subscription_match:2,onc:[2,9],one:[1,2,9,12,15,16],onli:[1,2,6,8,9,11,12,16,17],op:2,oper:[2,7],opposit:2,optim:14,option:[1,2,3,5,7,8,9,10,11,14,16,17],ordered_access:[8,16,17],orient:13,other:[2,3,12,14,16,17],otherwis:11,our:[12,14],out:[2,17],output:[15,17],outsid:12,over:[8,12,14],overlap:8,overrid:[2,14],overwritten:[2,8],ownership:[6,8,16,17],ownershipstrength:[2,8,16,17],p1:12,p2:12,p:[8,12],packag:[6,12,14,15],paramet:[1,2,3,4,5,6,7,8,9,10,11],parent:[2,12],part:[3,12,13,16],particip:[1,2,3,4,8,14,15,17],participant_instance_handl:[1,16],participant_kei:[1,16],particular:17,partit:[8,17],partition_:8,partition_a:8,partition_b:8,partition_c:8,pass:[2,8,12],path:[12,14],per:[8,14],perfect:12,perform:[2,14],permiss:14,persist:[8,17],piec:14,ping:15,pip:14,pipenv:14,place:11,plan:12,platform:[6,14],pleas:[1,2],poetri:14,point2d:12,point:[5,12,13],polici:[1,2,8,16,17],policytyp:8,pong:15,pop:14,posit:5,possibl:[6,12],power:14,pragma:12,pre:14,precondit:2,prefix:12,presenc:14,present:8,presentation_access_scop:6,presentationaccessscop:[8,16,17],preserv:12,previous:2,print:[2,12,14,16,17],prioriti:[8,16,17],problem:12,process:[2,8,17],program:2,project:12,properti:[2,5,7,8,9,10,15,16,17],provid:[2,13,16,17],provision:14,proxi:2,pub:[0,2,13,14],publication_handl:6,publication_matched_statu:[2,6],publicationmatch:2,publicli:8,publish:[1,2,7,9,14,16,17],publisher_or_particip:7,pubsub:15,pubsub_data:17,pure:12,purpos:12,put:[12,14],py:12,pyenv:14,pypi:[13,14],pytest:14,python:[0,1,2,3,4,5,6,7,8,9,10,11,15,16,17],q:[12,17],qo:[1,2,3,7,8,9,10,15,16],qos_p:6,qose:16,qoshelp:17,qoshowto:8,qualiti:16,queri:[1,9],querycondit:[1,2,9],question:13,queue:9,quirk:13,r:[16,17],rais:[1,2,4,8,9,11],rang:8,raw:12,re:16,read:[1,2,9],read_ait:9,read_it:9,read_next:9,read_on:9,read_statu:2,readabl:[2,7,8,11],readcondit:[1,2,9],reader:[1,2,7,14,16,17],readerdatalifecycl:[8,16,17],realli:5,reason:[12,14],receiv:[2,7,9,14],recommend:[8,14],red:12,ref:2,refer:[1,2,6,12],reflect:8,register_inst:7,registr:7,regular:5,reject:2,rel:8,relat:6,reliabl:[6,7,8,16,17],remain:2,remov:[2,9,15],render:15,repl:15,replac:2,repo:15,report:13,repositori:[13,15],repres:[1,3,8,10,15,17],represent:12,request:[4,17],requested_deadline_missed_statu:[2,6],requested_incompatible_qos_statu:[2,6],requesteddeadlinemiss:2,requestedincompatibleqo:2,requir:[12,14,17],reset:[2,9],resid:2,resourc:[2,13],resourcelimit:[8,16,17],respect:[2,16,17],rest:1,result:[12,16,17],resum:7,retain:2,retriev:[2,8,12],return_typ:6,returnv:6,rich:12,right:2,root:[3,12],roundtrip:4,run:[4,13,14,15,16,17],runtim:[12,14],runtyp:12,rxo:17,s:[2,7,8,9,12,13,14,15,16,17],same:[2,8,9,12,14,16],sampl:[1,2,5,6,7,8,9,16,17],sample_buff:6,sample_info:[6,9],sample_lost_statu:[2,6],sample_rank:6,sample_rejected_statu:[2,6],sample_st:6,sampleinfo:6,samplelost:2,samplereject:2,samplest:[2,6],satisfi:[1,9],scenario:12,schedul:15,scikit:12,scope:[2,8],screen:15,script:[14,16],search:13,second:[8,11,14,16,17],secondari:14,section:[16,17],secur:14,see:[11,12,14,16,17],segfault:2,select:[1,9,16,17],self:2,send:14,sens:12,separ:[3,4,17],seq:17,sequenc:[5,8,12,17],serial:5,serializ:12,serv:3,server:14,servic:16,set:[1,2,3,4,5,7,8,14,15,16,17],set_listen:2,set_on_data_avail:2,set_on_data_on_read:2,set_on_inconsistent_top:2,set_on_liveliness_chang:2,set_on_liveliness_lost:2,set_on_offered_deadline_miss:2,set_on_offered_incompatible_qo:2,set_on_publication_match:2,set_on_requested_deadline_miss:2,set_on_requested_incompatible_qo:2,set_on_sample_lost:2,set_on_sample_reject:2,set_on_subscription_match:2,set_qo:2,set_status_mask:2,set_trigg:2,sever:[2,4,12,14,15,16,17],share:[8,14,16,17],shortcut:9,should:[1,2,5,8,12,14],shouldn:2,show:[15,16,17],shut:16,sign:5,similar:[7,15],simpl:14,simpli:[14,17],sinc:[2,7,11,12,14,16],singl:[2,5,14,15],skill:13,slightli:12,sligtli:1,small:16,smallpoint2d:12,so:[1,2,9,12,15,17],solut:12,some:[2,4,11,13,17],someth:[2,8,13],sometim:[16,17],soon:[12,15],sort:8,sourc:[1,2,3,4,5,6,7,8,9,10,11,14],source_timestamp:[6,7],south:12,space:17,spec:5,special:12,specif:[2,6,14,16,17],specifi:[7,8,12,16,17],sphinx:14,stai:8,standard:[12,14],start:[2,14,16,17],startup:17,state:[2,17],statu:2,status_mask:2,step:[12,13,14],steps_:12,steps_n:12,steps_w:12,still:[2,12,15],stop:[9,16,17],store:[8,12],str:[1,2,3,4,5,8,10,12,14,17],strarrai:17,stream:13,strength:[8,16,17],string:[2,5,8,17],strsequenc:17,struct:12,structur:6,style:12,sub:[0,1,2,13,14],subclass:4,subcommand:15,submodul:12,subpackag:12,subscrib:[1,2,9,16,17],subscriber_or_particip:[1,9],subscript:[1,16,17],subscription_matched_statu:[2,6],subscriptionmatch:2,subsequ:7,subtyp:5,success:2,successfulli:17,suffic:12,suggest:6,suppli:[1,2,9],support:[8,12,13,14,17],sure:1,suspend:7,synchron:2,syntax:12,system:[2,12,14,15,16,17],t:[2,5,14,16,17],tactfulli:15,tactic:12,take:[1,2,7,9,12,13,14],take_ait:9,take_it:[9,14],take_next:9,take_on:9,take_statu:2,talk:14,tell:14,termin:[14,16,17],test:[16,17],testsuit:14,testtop:16,text:14,textual:12,than:[1,2,3,9,15,16,17],thei:[1,2,11,12,15,16],them:[8,9,12,14],therefor:12,thi:[1,2,4,5,6,7,8,11,12,14,15,16,17],think:14,those:8,thread:[2,4,7],threenumb:12,through:[2,13],thrown:2,thu:[8,12],ti:5,tibe:5,time:[2,6,8,9,11,12,13,16,17],timebasedfilt:[8,16,17],timeout:[2,4,7,9,14],timestamp:[7,8,11],tini:2,todo:[2,8],togeth:17,tool:[12,14],topic:[0,1,2,4,6,7,8,9,13,14,15],topic_descriptor_p:6,topic_nam:[1,10,16],topicdata:[8,17],total:[2,8],total_count:6,total_count_chang:6,track:2,tracker:13,transientloc:[8,17],transportprior:[8,16,17],treasuremap:12,treat:8,trigger:2,troubl:13,tupl:[4,8],turn:[2,12],tutori:13,two:[8,15,16],type1:12,type2:12,type:[1,2,3,4,6,7,8,9,10,11,13,14,15,16,17],type_consist:6,type_id:[1,4],type_nam:[1,16],typeconsist:8,typedef:5,typeerror:8,typeid:1,typeidentifi:[1,4],typenam:10,typic:[5,11],uint128:12,uint16:[5,12],uint32:[5,12],uint64:[5,12],uint8:[5,12],unblock:2,unbound:12,unchang:2,under:[12,13,14],underli:2,union:[1,4,6,7,8,9],uniqu:[1,2,16],unix:[6,7,11],unlik:[2,12],unread:2,unregist:7,unregister_inst:7,unregister_instance_handl:7,unsign:5,unsupport:2,until:[7,16,17],untrigg:2,up:[12,14,16,17],updat:2,upon:4,us:[1,2,4,5,6,7,8,9,11,12,13,14,15,16,17],usag:[2,13],use_cdrv0_represent:8,use_version_2:5,use_xcdrv2_represent:8,user:[14,17],userdata:[8,16,17],utf:12,util:[0,13,14],uuid:[1,2,6],v1:12,v:[6,11,16],valid:[2,11],valid_data:6,valu:[2,5,6,8,12,16,17],valueerror:8,variabl:14,ve:16,vehicl:[15,16],veri:[5,12],versatil:12,version:[4,8,14,15],via:[13,14],view:[2,16,17],view_stat:6,viewstat:[2,6],virtual:14,volatil:[8,16,17],w:16,wa:[2,6],wai:[2,12,17],wait:[2,7],wait_async:2,wait_for_ack:7,wait_for_historical_data:9,wait_until:2,waitset:2,walkinstruct:12,want:[2,12,13,14,16,17],warn:17,we:[2,12,13,14],week:11,well:4,were:[2,15],west:12,wether:2,what:[2,12,14,16,17],wheel:14,when:[1,2,8,12,14,15,16,17],where:[2,12],whether:[2,11,16],which:[1,2,9,12,14,15,16,17],whichev:7,why:12,wiht:7,wish:[2,12,14],within:[8,12,17],without:[1,2],won:[2,17],work:[2,4,8],world:[8,14],worri:14,would:[2,8,11,12,14],wrap:14,write:[2,7,8,11,12,14],write_dispos:7,writer:[2,7,14,15,16,17],writerdatalifecycl:[8,16,17],written:[6,7,16,17],wubbl:12,x:[8,12],xcdr:12,xcdrv2:5,xtype:[1,4,15,17],y:[8,12],ye:17,you:[1,2,8,9,11,12,13,14,15,16,17],your:[2,3,12,13,15,16,17],your_fil:12},titles:["API","builtin","core","domain","dynamic","idl","internal","pub","core","sub","topic","util","Working with idl","Eclipse Cyclone DDS: Python API documentation","Introduction","Tools","Command line tool: ddsls","Command line tool: pubsub"],titleterms:{"float":12,"typeof":15,The:15,annot:[5,12],api:[0,13],applic:14,builtin:1,command:[15,16,17],compil:12,comprehend:16,core:[2,8],cyclon:13,cyclonedd:15,data:17,datatyp:12,dd:[13,14],ddsl:16,dictionari:12,document:13,domain:[3,16],dynam:4,eclips:13,entiti:17,featur:13,file:[16,17],first:14,get:13,help:13,id:16,idl:[5,12],inapplic:17,incompat:17,instal:14,integ:12,intern:6,introduct:[14,16,17],json:16,legaci:15,line:[15,16,17],list:12,ls:15,mode:16,object:12,other:13,output:16,particip:16,perform:15,prerequisit:14,ps:15,pub:7,publish:15,pubsub:17,python:[12,13,14],qo:17,read:17,runtim:[16,17],serial:12,start:13,string:12,sub:9,subscrib:15,tool:[13,15,16,17],topic:[10,16,17],type:[5,12],union:12,usag:[16,17],util:11,verbos:16,watch:16,work:12,write:[16,17],your:14}})