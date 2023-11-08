const fs = require("fs")
const { MilvusClient } = require("@zilliz/milvus2-sdk-node")

const address = "YOUR_CLUSTER_ENDPOINT"
const token = "YOUR_CLUSTER_TOKEN"
const collectionName = "medium_articles_2020"
const data_file = `./medium_articles_2020_dpr.json`

// Include the following in an async function declaration
async function main () {

    // Connect to the cluster
    const client = new MilvusClient({address, token})
        
    // Create a collection
    let res = await client.createCollection({
        collection_name: collectionName,
        dimension: 768,
    });

    console.log(res)

    // Output
    // 
    // { error_code: 'Success', reason: '', code: 0 }
    // 



    // Describe the created collection
    res = await client.describeCollection({
        collection_name: collectionName
    });
   
    console.log(res)

    // Output
    // 
    // {
    //   virtual_channel_names: [ 'by-dev-rootcoord-dml_0_445453895051083575v0' ],
    //   physical_channel_names: [ 'by-dev-rootcoord-dml_0' ],
    //   aliases: [],
    //   start_positions: [],
    //   properties: [],
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   schema: {
    //     fields: [ [Object], [Object] ],
    //     name: 'medium_articles_2020',
    //     description: '',
    //     autoID: false,
    //     enable_dynamic_field: true
    //   },
    //   collectionID: '445453895051083575',
    //   created_timestamp: '445473159642873859',
    //   created_utc_timestamp: '1699345243999',
    //   shards_num: 1,
    //   consistency_level: 'Bounded',
    //   collection_name: 'medium_articles_2020',
    //   db_name: 'default',
    //   num_partitions: '1'
    // }
    // 



    // Insert a record
    res = await client.insert({
        collection_name: collectionName,
        data: [{
            'id': 0, 
            'title': 'The Reported Mortality Rate of Coronavirus Is Not Important', 
            'link': '<https://medium.com/swlh/the-reported-mortality-rate-of-coronavirus-is-not-important-369989c8d912>', 
            'reading_time': 13, 
            'publication': 'The Startup', 
            'claps': 1100, 
            'responses': 18, 
            'vector': [0.041732933, 0.013779674, -0.027564144, -0.013061441, 0.009748648, 0.00082446384, -0.00071647146, 0.048612226, -0.04836573, -0.04567751, 0.018008126, 0.0063936645, -0.011913628, 0.030776596, -0.018274948, 0.019929802, 0.020547243, 0.032735646, -0.031652678, -0.033816382, -0.051087562, -0.033748355, 0.0039493158, 0.009246126, -0.060236514, -0.017136049, 0.028754413, -0.008433934, 0.011168004, -0.012391256, -0.011225835, 0.031775184, 0.002929508, -0.007448661, -0.005337719, -0.010999258, -0.01515909, -0.005130484, 0.0060212007, 0.0034560722, -0.022935811, -0.04970116, -0.0155887455, 0.06627353, -0.006052789, -0.051570725, -0.109865054, 0.033205193, 0.00041118253, 0.0029823708, 0.036160238, -0.011256539, 0.00023560718, 0.058322437, 0.022275906, 0.015206677, -0.02884609, 0.0016338055, 0.0049200393, 0.014388571, -0.0049061654, -0.04664761, -0.027454877, 0.017526226, -0.005100602, 0.018090058, 0.02700998, 0.04031944, -0.0097965, -0.03674761, -0.0043163053, -0.023320708, 0.012654851, -0.014262311, -0.008081833, -0.018334744, 0.0014025003, -0.003053399, -0.002636383, -0.022398386, -0.004725274, 0.00036367847, -0.012368711, 0.0014739085, 0.03450414, 0.009684024, 0.017912658, 0.06594397, 0.021381201, 0.029343689, -0.0069561847, 0.026152428, 0.04635037, 0.014746184, -0.002119602, 0.034359712, -0.013705124, 0.010691518, 0.04060854, 0.013679299, -0.018990282, 0.035340093, 0.007353945, -0.035990074, 0.013126987, -0.032933377, -0.001756877, -0.0049658176, -0.03380879, -0.07024137, -0.0130426735, 0.010533265, -0.023091802, -0.004645729, -0.03344451, 0.04759929, 0.025985204, -0.040710885, -0.016681142, -0.024664842, -0.025170377, 0.08839205, -0.023733815, 0.019494494, 0.0055427826, 0.045460507, 0.07066554, 0.022181382, 0.018302314, 0.026806992, -0.006066003, 0.046525814, -0.04066389, 0.019001767, 0.021242762, -0.020784091, -0.031635042, 0.04573943, 0.02515421, -0.050663553, -0.05183343, -0.046468202, -0.07910535, 0.017036669, 0.021445233, 0.04277428, -0.020235524, -0.055314954, 0.00904601, -0.01104365, 0.03069203, -0.00821997, -0.035594665, 0.024322856, -0.0068963314, 0.009003657, 0.00398102, -0.008596356, 0.014772055, 0.02740991, 0.025503553, 0.0038213644, -0.0047855405, -0.034888722, 0.030553816, -0.008325959, 0.030010607, 0.023729775, 0.016138833, -0.022967983, -0.08616877, -0.02460819, -0.008210168, -0.06444098, 0.018750126, -0.03335763, 0.022024624, 0.032374356, 0.023870794, 0.021288997, -0.026617877, 0.020435361, -0.003692393, -0.024113296, 0.044870164, -0.030451361, 0.013022849, 0.002278627, -0.027616743, -0.012087787, -0.033232547, -0.022974484, 0.02801226, -0.029057292, 0.060317725, -0.02312559, 0.015558754, 0.073630534, 0.02490823, -0.0140531305, -0.043771528, 0.040756326, 0.01667925, -0.0046050115, -0.08938058, 0.10560781, 0.015044094, 0.003613817, 0.013523503, -0.011039813, 0.06396795, 0.013428416, -0.025031878, -0.014972648, -0.015970055, 0.037022553, -0.013759925, 0.013363354, 0.0039748577, -0.0040822625, 0.018209668, -0.057496265, 0.034993384, 0.07075411, 0.023498386, 0.085871644, 0.028646072, 0.007590898, 0.07037031, -0.05005178, 0.010477505, -0.014106617, 0.013402172, 0.007472563, -0.03131418, 0.020552127, -0.031878896, -0.04170217, -0.03153583, 0.03458349, 0.03366634, 0.021306382, -0.037176874, 0.029069472, 0.014662372, 0.0024123765, -0.025403008, -0.0372993, -0.049923114, -0.014209514, -0.015524425, 0.036377322, 0.04259327, -0.029715618, 0.02657093, -0.0062432447, -0.0024253451, -0.021287171, 0.010478781, -0.029322306, -0.021203341, 0.047209084, 0.025337176, 0.018471811, -0.008709492, -0.047414266, -0.06227469, -0.05713435, 0.02141101, 0.024481304, 0.07176469, 0.0211379, -0.049316987, -0.124073654, 0.0049275495, -0.02461509, -0.02738388, 0.04825289, -0.05069646, 0.012640115, -0.0061352802, 0.034599125, 0.02799496, -0.01511028, -0.046418104, 0.011309801, 0.016673129, -0.033531003, -0.049203333, -0.027218347, -0.03528408, 0.008881575, 0.010736325, 0.034232814, 0.012807507, -0.0100207105, 0.0067757815, 0.009538357, 0.026212366, -0.036120333, -0.019764563, 0.006527411, -0.016437015, -0.009759148, -0.042246807, 0.012492151, 0.0066206953, 0.010672299, -0.44499892, -0.036189068, -0.015703931, -0.031111298, -0.020329623, 0.0047888453, 0.090396516, -0.041484866, 0.033830352, -0.0033847596, 0.06065415, 0.030880837, 0.05558494, 0.022805553, 0.009607596, 0.006682602, 0.036806617, 0.02406229, 0.034229457, -0.0105605405, 0.034754273, 0.02436426, -0.03849325, 0.021132406, -0.01251386, 0.022090863, -0.029137045, 0.0064384523, -0.03175176, -0.0070441505, 0.016025176, -0.023172623, 0.00076795724, -0.024106828, -0.045440633, -0.0074440194, 0.00035374766, 0.024374487, 0.0058897804, -0.012461025, -0.029086761, 0.0029477053, -0.022914894, -0.032369837, 0.020743662, 0.024116345, 0.0020526652, 0.0008596536, -0.000583463, 0.061080184, 0.020812698, -0.0235381, 0.08112197, 0.05689626, -0.003070104, -0.010714772, -0.004864459, 0.027089117, -0.030910335, 0.0017404438, -0.014978656, 0.0127020255, 0.01878998, -0.051732827, -0.0037475713, 0.013033434, -0.023682894, -0.03219574, 0.03736345, 0.0058930484, -0.054040316, 0.047637977, 0.012636436, -0.05820182, 0.013828813, -0.057893142, -0.012405234, 0.030266648, -0.0029184038, -0.021839319, -0.045179468, -0.013123978, -0.021320488, 0.0015718226, 0.020244086, -0.014414709, 0.009535103, -0.004497577, -0.02577227, -0.0085017495, 0.029090486, 0.009356506, 0.0055838437, 0.021151636, 0.039531752, 0.07814674, 0.043186333, -0.0077368533, 0.028967595, 0.025058193, 0.05432941, -0.04383656, -0.027070394, -0.080263995, -0.03616516, -0.026129462, -0.0033627374, 0.035040155, 0.015231506, -0.06372076, 0.046391208, 0.0049725454, 0.003783345, -0.057800908, 0.061461, -0.017880175, 0.022820404, 0.048944063, 0.04725843, -0.013392871, 0.05023065, 0.0069421427, -0.019561166, 0.012953843, 0.06227977, -0.02114757, -0.003334329, 0.023241237, -0.061053444, -0.023145229, 0.016086273, 0.0774039, 0.008069459, -0.0013532874, -0.016790181, -0.027246375, -0.03254919, 0.033754334, 0.00037142826, -0.02387325, 0.0057056695, 0.0084914565, -0.051856343, 0.029254, 0.005583839, 0.011591886, -0.033027634, -0.004170374, 0.018334484, -0.0030969654, 0.0024489106, 0.0030196267, 0.023012564, 0.020529047, 0.00010772953, 0.0017700809, 0.029260442, -0.018829526, -0.024797931, -0.039499596, 0.008108761, -0.013099816, -0.11726566, -0.005652353, -0.008117937, -0.012961832, 0.0152542135, -0.06429504, 0.0184562, 0.058997117, -0.027178442, -0.019294549, -0.01587592, 0.0048053437, 0.043830805, 0.011232237, -0.026841154, -0.0007282251, -0.00862919, -0.008405325, 0.019370917, -0.008112641, -0.014931766, 0.065622255, 0.0149185015, 0.013089685, -0.0028022556, -0.028629888, -0.048105706, 0.009296162, 0.010251239, 0.030800395, 0.028263845, -0.011021621, -0.034127586, 0.014709971, -0.0075270324, 0.010737263, 0.020517904, -0.012932179, 0.007153817, 0.03736311, -0.03391106, 0.03028614, 0.012531187, -0.046059456, -0.0043963846, 0.028799629, -0.06663413, -0.009447025, -0.019833198, -0.036111858, -0.01901045, 0.040701825, 0.0060573653, 0.027482377, -0.019782187, -0.020186251, 0.028398912, 0.027108852, 0.026535714, -0.000995191, -0.020599326, -0.005658084, -0.017271476, 0.026300041, -0.006992451, -0.08593853, 0.03675959, 0.0029454317, -0.040927384, -0.035480253, 0.016498009, -0.03406521, -0.026182177, -0.0007024827, 0.019500641, 0.0047998386, -0.02416359, 0.0019833131, 0.0033488963, 0.037788488, -0.009154958, -0.043469638, -0.024896, -0.017234193, 0.044996973, -0.06303135, -0.051730774, 0.04041444, 0.0075959326, -0.03901764, -0.019851806, -0.008242245, 0.06107143, 0.030118924, -0.016167669, -0.028161867, -0.0025679746, -0.021713274, 0.025275888, -0.012819265, -0.036431268, 0.017991759, 0.040626206, -0.0036572467, -0.0005935883, -0.0037468506, 0.034460746, -0.0182785, -0.00431203, -0.044755403, 0.016463224, 0.041199315, -0.0093387, 0.03919184, -0.01151653, -0.016965209, 0.006347649, 0.021104146, 0.060276803, -0.026659148, 0.026461488, -0.032700688, 0.0012274865, -0.024675943, -0.003006079, -0.009607032, 0.010597691, 0.0043017124, -0.01908524, 0.006748306, -0.03049305, -0.017481703, 0.036747415, 0.036634356, 0.0007106319, 0.045647435, -0.020883067, -0.0593661, -0.03929885, 0.042825453, 0.016104022, -0.03222858, 0.031112716, 0.020407677, -0.013276762, 0.03657825, -0.033871554, 0.004176301, 0.009538976, -0.009995692, 0.0042660628, 0.050545394, -0.018142857, 0.005219403, 0.0006711967, -0.014264284, 0.031044828, -0.01827481, 0.012488852, 0.031393733, 0.050390214, -0.014484084, -0.054758117, 0.055042055, -0.005506624, -0.0066648237, 0.010891078, 0.012446279, 0.061687976, 0.018091502, 0.0026527622, 0.0321537, -0.02469515, 0.01772019, 0.006846163, -0.07471038, -0.024433741, 0.02483875, 0.0497063, 0.0043456135, 0.056550737, 0.035752796, -0.02430349, 0.036570627, -0.027576203, -0.012418993, 0.023442797, -0.03433812, 0.01953399, -0.028003592, -0.021168072, 0.019414881, -0.014712576, -0.0003938545, 0.021453558, -0.023197332, -0.004455581, -0.08799191, 0.0010808896, 0.009281116, -0.0051161298, 0.031497046, 0.034916095, -0.023042161, 0.030799815, 0.017298799, 0.0015253434, 0.013728047, 0.0035838438, 0.016767647, -0.022243451, 0.013371096, 0.053564783, -0.008776885, -0.013133307, 0.015577713, -0.027008705, 0.009490815, -0.04103532, -0.012426461, -0.0050485474, -0.04323231, -0.013291623, -0.01660157, -0.055480026, 0.017622838, 0.017476618, -0.009798125, 0.038226977, -0.03127579, 0.019329516, 0.033461004, -0.0039813113, -0.039526325, 0.03884973, -0.011381027, -0.023257744, 0.03033401, 0.0029607012, -0.0006490531, -0.0347344, 0.029701462, -0.04153701, 0.028073426, -0.025427297, 0.009756264, -0.048082624, 0.021743972, 0.057197016, 0.024082556, -0.013968224, 0.044379756, -0.029081704, 0.003487999, 0.042621125, -0.04339743, -0.027005397, -0.02944044, -0.024172144, -0.07388652, 0.05952364, 0.02561452, -0.010255158, -0.015288555, 0.045012463, 0.012403602, -0.021197597, 0.025847573, -0.016983166, 0.03021369, -0.02920852, 0.035140667, -0.010627725, -0.020431923, 0.03191218, 0.0046844087, 0.056356475, -0.00012615003, -0.0052536936, -0.058609407, 0.009710908, 0.00041168949, -0.22300485, -0.0077232462, 0.0029359192, -0.028645728, -0.021156758, 0.029606635, -0.026473567, -0.0019432966, 0.023867624, 0.021946864, -0.00082128344, 0.01897284, -0.017976845, -0.015677344, -0.0026336901, 0.030096486]
            }]
    });

    console.log(res)

    // Output
    // 
    // {
    //   succ_index: [ 0 ],
    //   err_index: [],
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   IDs: { int_id: { data: [Array] }, id_field: 'int_id' },
    //   acknowledged: false,
    //   insert_cnt: '1',
    //   delete_cnt: '0',
    //   upsert_cnt: '0',
    //   timestamp: '445473160639545348'
    // }
    // 



    // Read a few records from the dataset
    const data = JSON.parse(fs.readFileSync(data_file, 'utf8'));
    const client_data = data.rows.map((row) => {
        row.vector = row.title_vector;
        delete row.title_vector;
        return row;
    });
    
    console.log(client_data.slice(0, 2));

    // Output
    // 
    // [
    //   {
    //     id: 0,
    //     title: 'The Reported Mortality Rate of Coronavirus Is Not Important',
    //     link: 'https://medium.com/swlh/the-reported-mortality-rate-of-coronavirus-is-not-important-369989c8d912',
    //     reading_time: 13,
    //     publication: 'The Startup',
    //     claps: 1100,
    //     responses: 18,
    //     vector: [
    //         0.041732933,   0.013779674,   -0.027564144, -0.013061441,
    //         0.009748648, 0.00082446384, -0.00071647146,  0.048612226,
    //         -0.04836573,   -0.04567751,    0.018008126, 0.0063936645,
    //        -0.011913628,   0.030776596,   -0.018274948,  0.019929802,
    //         0.020547243,   0.032735646,   -0.031652678, -0.033816382,
    //        -0.051087562,  -0.033748355,   0.0039493158,  0.009246126,
    //        -0.060236514,  -0.017136049,    0.028754413, -0.008433934,
    //         0.011168004,  -0.012391256,   -0.011225835,  0.031775184,
    //         0.002929508,  -0.007448661,   -0.005337719, -0.010999258,
    //         -0.01515909,  -0.005130484,   0.0060212007, 0.0034560722,
    //        -0.022935811,   -0.04970116,  -0.0155887455,   0.06627353,
    //        -0.006052789,  -0.051570725,   -0.109865054,  0.033205193,
    //       0.00041118253,  0.0029823708,    0.036160238, -0.011256539,
    //       0.00023560718,   0.058322437,    0.022275906,  0.015206677,
    //         -0.02884609,  0.0016338055,   0.0049200393,  0.014388571,
    //       -0.0049061654,   -0.04664761,   -0.027454877,  0.017526226,
    //        -0.005100602,   0.018090058,     0.02700998,   0.04031944,
    //          -0.0097965,   -0.03674761,  -0.0043163053, -0.023320708,
    //         0.012654851,  -0.014262311,   -0.008081833, -0.018334744,
    //        0.0014025003,  -0.003053399,   -0.002636383, -0.022398386,
    //        -0.004725274, 0.00036367847,   -0.012368711, 0.0014739085,
    //          0.03450414,   0.009684024,    0.017912658,   0.06594397,
    //         0.021381201,   0.029343689,  -0.0069561847,  0.026152428,
    //          0.04635037,   0.014746184,   -0.002119602,  0.034359712,
    //        -0.013705124,   0.010691518,     0.04060854,  0.013679299,
    //       ... 668 more items
    //     ]
    //   },
    //   {
    //     id: 1,
    //     title: 'Dashboards in Python: 3 Advanced Examples for Dash Beginners and Everyone Else',
    //     link: 'https://medium.com/swlh/dashboards-in-python-3-advanced-examples-for-dash-beginners-and-everyone-else-b1daf4e2ec0a',
    //     reading_time: 14,
    //     publication: 'The Startup',
    //     claps: 726,
    //     responses: 3,
    //     vector: [
    //         0.0039737443,   0.003020432, -0.0006188639,    0.03913546,
    //       -0.00089768134,   0.021238148,   0.014454661,   0.025742851,
    //         0.0022063442,  -0.051130578, -0.0010897011,   0.038453076,
    //          0.011593861,  -0.046852026,  0.0064208573,   0.010120634,
    //         -0.023668954,   0.041229635,   0.008146385,  -0.023367394,
    //         -0.029139837,  -0.023222756,  -0.016318452,  -0.076287195,
    //          0.035851076,   0.044926822,  0.0037161126,   0.024241403,
    //         -0.024827085,  -0.012770665,  0.0018561907,   0.047921725,
    //         -0.030281143,  -0.031129083,  -0.038785066,  -0.048101038,
    //          0.008587025, -0.0036647166,  -0.013043694,  -0.044786748,
    //         0.0015023423,   -0.02393749,   0.027479807,    0.03407725,
    //         -0.011031249,  -0.016997544,   -0.11140522, -0.0012403706,
    //        -0.0116099715,   0.010803051,  -0.042221617,   0.071550176,
    //          0.029078195,    0.02936992,  -0.016870253,   0.024187507,
    //        -0.0064322287, -0.0018420032,  -0.010838795,   0.005448679,
    //          0.042049922,   0.015199081,   -0.00612731,    0.04651738,
    //        -0.0004543191,  0.0018536948,  -0.021741537,   0.042303678,
    //         -0.016282137,   0.031659417,    0.03347323,   -0.05687932,
    //          -0.04784338,   0.047716856,   -0.04012971,  -0.024161791,
    //         -0.015605036,    0.01364975,   0.023177518,    0.01887649,
    //          0.040253926,   0.021470893,    0.09768697,  -0.032784328,
    //           0.03222924,    0.03559948, -0.0028161134,    0.03687029,
    //         -0.013814558,  -0.009652667,   0.021593641,   -0.05943368,
    //          0.026042875,   0.028282177,   0.007687183,   0.020226369,
    //        -0.0016281981,  -0.008526736,   0.025751492,  -0.003104332,
    //       ... 668 more items
    //     ]
    //   }
    // ]
    // 


    
    res = await client.insert({
        collection_name: collectionName,
        data: client_data
    })
    
    console.log(res);

    // Output
    // 
    // {
    //   succ_index: [
    //      0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
    //     12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    //     24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    //     36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    //     48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    //     60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
    //     72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    //     84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
    //     96, 97, 98, 99,
    //     ... 5879 more items
    //   ],
    //   err_index: [],
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   IDs: { int_id: { data: [Array] }, id_field: 'int_id' },
    //   acknowledged: false,
    //   insert_cnt: '5979',
    //   delete_cnt: '0',
    //   upsert_cnt: '0',
    //   timestamp: '445473165803520001'
    // }
    // 



    await new Promise(resolve => setTimeout(resolve, 10000));

    // single vector search
    res = await client.search({
        collection_name: collectionName,
        // highlight-next-line
        vector: client_data[0].vector,
        output_fields: ['title', 'link'],
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   results: [
    //     {
    //       score: 1,
    //       id: '0',
    //       title: 'The Reported Mortality Rate of Coronavirus Is Not Important',
    //       link: 'https://medium.com/swlh/the-reported-mortality-rate-of-coronavirus-is-not-important-369989c8d912'
    //     },
    //     {
    //       score: 0.8500008583068848,
    //       id: '3177',
    //       title: 'Following the Spread of Coronavirus',
    //       link: 'https://towardsdatascience.com/following-the-spread-of-coronavirus-23626940c125'
    //     },
    //     {
    //       score: 0.8194807767868042,
    //       id: '5607',
    //       title: 'The Hidden Side Effect of the Coronavirus',
    //       link: 'https://medium.com/swlh/the-hidden-side-effect-of-the-coronavirus-b6a7a5ee9586'
    //     },
    //     {
    //       score: 0.8116300106048584,
    //       id: '5641',
    //       title: 'Why The Coronavirus Mortality Rate is Misleading',
    //       link: 'https://towardsdatascience.com/why-the-coronavirus-mortality-rate-is-misleading-cc63f571b6a6'
    //     }
    //   ]
    // }
    // 


    // bulk vector search
    res = await client.search({
        collection_name: collectionName,
        // highlight-next-line
        vectors: [ client_data[0].vector, client_data[1].vector ],
        output_fields: ['title', 'link'],
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   results: [
    //     [ [Object], [Object], [Object], [Object] ],
    //     [ [Object], [Object], [Object], [Object], [Object] ]
    //   ]
    // }
    // 


    // search with filters
    res = await client.search({
        collection_name: collectionName,
        vector: client_data[0].vector,
        // highlight-start
        filter: "10 < reading_time < 15",
        output_fields: ["title", "reading_time"],        
        // highlight-end
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   results: [
    //     {
    //       score: 1,
    //       id: '0',
    //       title: 'The Reported Mortality Rate of Coronavirus Is Not Important',
    //       reading_time: 13
    //     },
    //     {
    //       score: 0.7706888914108276,
    //       id: '5780',
    //       title: 'Heart Disease Risk Assessment Using Machine Learning',
    //       reading_time: 12
    //     },
    //     {
    //       score: 0.7372192144393921,
    //       id: '4331',
    //       title: 'Common Pipenv Errors',
    //       reading_time: 11
    //     },
    //     {
    //       score: 0.7160055637359619,
    //       id: '2803',
    //       title: 'How Does US Healthcare Compare With Healthcare Around the World?',
    //       reading_time: 12
    //     }
    //   ]
    // }
    // 


    res = await client.search({
        collection_name: collectionName,
        vector: client_data[0].vector,
        // highlight-start
        filter: 'claps > 1500 and responses > 15',
        output_fields: ['title', 'claps', 'responses'],       
        // highlight-end
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   results: [
    //     {
    //       score: 0.8116300106048584,
    //       id: '5641',
    //       responses: 47,
    //       title: 'Why The Coronavirus Mortality Rate is Misleading',
    //       claps: 2900
    //     },
    //     {
    //       score: 0.6613576412200928,
    //       id: '1394',
    //       responses: 212,
    //       title: 'Remote Work Is Not Here to Stay',
    //       claps: 2600
    //     },
    //     {
    //       score: 0.6581544280052185,
    //       id: '4573',
    //       responses: 40,
    //       title: 'Apple May Lose the Developer Crowd',
    //       claps: 1800
    //     },
    //     {
    //       score: 0.6399664878845215,
    //       id: '1810',
    //       responses: 155,
    //       title: 'Facebook’s New Remote Salary Policy is “Barbaric”',
    //       claps: 10700
    //     },
    //     {
    //       score: 0.6333904266357422,
    //       id: '5682',
    //       responses: 29,
    //       title: 'Neumorphism — the zombie trend',
    //       claps: 2800
    //     }
    //   ]
    // }
    // 

    res = await client.search({
        collection_name: collectionName,
        vector: client_data[0].vector,
        // highlight-start
        filter: 'publication == "Towards Data Science"',
        output_fields: ["title", "publication"],      
        // highlight-end
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   results: [
    //     {
    //       score: 0.8500008583068848,
    //       id: '3177',
    //       title: 'Following the Spread of Coronavirus',
    //       publication: 'Towards Data Science'
    //     },
    //     {
    //       score: 0.8116300106048584,
    //       id: '5641',
    //       title: 'Why The Coronavirus Mortality Rate is Misleading',
    //       publication: 'Towards Data Science'
    //     },
    //     {
    //       score: 0.7819530963897705,
    //       id: '938',
    //       title: 'Mortality Rate As an Indicator of an Epidemic Outbreak',
    //       publication: 'Towards Data Science'
    //     },
    //     {
    //       score: 0.7706888914108276,
    //       id: '5780',
    //       title: 'Heart Disease Risk Assessment Using Machine Learning',
    //       publication: 'Towards Data Science'
    //     },
    //     {
    //       score: 0.7686221599578857,
    //       id: '3072',
    //       title: 'Can we learn anything from the progression of influenza to analyze the COVID-19 pandemic better?',
    //       publication: 'Towards Data Science'
    //     }
    //   ]
    // }
    // 

    res = await client.search({
        collection_name: collectionName,
        vector: client_data[0].vector,
        // highlight-start
        filter: 'publication not in ["Towards Data Science", "Personal Growth"]',
        output_fields: ["title", "publication"],    
        // highlight-end
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   results: [
    //     {
    //       score: 1,
    //       id: '0',
    //       title: 'The Reported Mortality Rate of Coronavirus Is Not Important',
    //       publication: 'The Startup'
    //     },
    //     {
    //       score: 0.8194807767868042,
    //       id: '5607',
    //       title: 'The Hidden Side Effect of the Coronavirus',
    //       publication: 'The Startup'
    //     },
    //     {
    //       score: 0.7918509244918823,
    //       id: '3441',
    //       title: 'Coronavirus shows what ethical Amazon could look like',
    //       publication: 'The Startup'
    //     },
    //     {
    //       score: 0.7555683851242065,
    //       id: '4275',
    //       title: 'How Can AI Help Fight Coronavirus?',
    //       publication: 'The Startup'
    //     }
    //   ]
    // }
    // 

    res = await client.search({
        collection_name: collectionName,
        vector: client_data[0].vector,
        // highlight-start
        filter: 'title like "Top%"',
        output_fields: ["title", "link"],  
        // highlight-end
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // { status: { error_code: 'Success', reason: '', code: 0 }, results: [] }
    // 

    res = await client.search({
        collection_name: collectionName,
        vector: client_data[0].vector,
        // highlight-start
        filter: '(publication == "Towards Data Science") and ((claps > 1500 and responses > 15) or (10 < reading_time < 15))',
        output_fields: ["title", "publication", "claps", "responses", "reading_time"],     
        // highlight-end
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   results: [
    //     {
    //       score: 0.8116300106048584,
    //       id: '5641',
    //       publication: 'Towards Data Science',
    //       claps: 2900,
    //       responses: 47,
    //       reading_time: 9,
    //       title: 'Why The Coronavirus Mortality Rate is Misleading'
    //     },
    //     {
    //       score: 0.7706888914108276,
    //       id: '5780',
    //       publication: 'Towards Data Science',
    //       claps: 15,
    //       responses: 0,
    //       reading_time: 12,
    //       title: 'Heart Disease Risk Assessment Using Machine Learning'
    //     },
    //     {
    //       score: 0.7372192144393921,
    //       id: '4331',
    //       publication: 'Towards Data Science',
    //       claps: 20,
    //       responses: 1,
    //       reading_time: 11,
    //       title: 'Common Pipenv Errors'
    //     },
    //     {
    //       score: 0.7061258554458618,
    //       id: '2587',
    //       publication: 'Towards Data Science',
    //       claps: 61,
    //       responses: 0,
    //       reading_time: 12,
    //       title: 'Data quality impact on the dataset'
    //     },
    //     {
    //       score: 0.6995357275009155,
    //       id: '1965',
    //       publication: 'Towards Data Science',
    //       claps: 47,
    //       responses: 0,
    //       reading_time: 11,
    //       title: 'Domestic Violence — The Shadow Pandemic of Covid19'
    //     }
    //   ]
    // }
    // 

    res = await client.search({
        collection_name: collectionName,
        vector: client_data[0].vector,
        // highlight-start
        filter: '(publication == "Towards Data Science") and ((claps > 1500 and responses > 15) or (10 < reading_time < 15))',
        output_fields: ["title", "publication", "claps", "responses", "reading_time"],     
        // highlight-end
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   results: [
    //     {
    //       score: 0.8116300106048584,
    //       id: '5641',
    //       responses: 47,
    //       reading_time: 9,
    //       title: 'Why The Coronavirus Mortality Rate is Misleading',
    //       publication: 'Towards Data Science',
    //       claps: 2900
    //     },
    //     {
    //       score: 0.7706888914108276,
    //       id: '5780',
    //       responses: 0,
    //       reading_time: 12,
    //       title: 'Heart Disease Risk Assessment Using Machine Learning',
    //       publication: 'Towards Data Science',
    //       claps: 15
    //     },
    //     {
    //       score: 0.7372192144393921,
    //       id: '4331',
    //       responses: 1,
    //       reading_time: 11,
    //       title: 'Common Pipenv Errors',
    //       publication: 'Towards Data Science',
    //       claps: 20
    //     },
    //     {
    //       score: 0.7061258554458618,
    //       id: '2587',
    //       responses: 0,
    //       reading_time: 12,
    //       title: 'Data quality impact on the dataset',
    //       publication: 'Towards Data Science',
    //       claps: 61
    //     },
    //     {
    //       score: 0.6995357275009155,
    //       id: '1965',
    //       responses: 0,
    //       reading_time: 11,
    //       title: 'Domestic Violence — The Shadow Pandemic of Covid19',
    //       publication: 'Towards Data Science',
    //       claps: 47
    //     }
    //   ]
    // }
    // 


    // Perform a query
    res = await client.query({
        collection_name: collectionName,
        filter: '(publication == "Towards Data Science") and ((claps > 1500 and responses > 15) or (10 < reading_time < 15))',
        output_fields: ["title", "publication", "claps", "responses", "reading_time"],
        limit: 5,
    })
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   data: [
    //     { '$meta': [Object], id: '69' },
    //     { '$meta': [Object], id: '73' },
    //     { '$meta': [Object], id: '75' },
    //     { '$meta': [Object], id: '79' },
    //     { '$meta': [Object], id: '80' }
    //   ]
    // }
    // 



    // Get an entity by id
    res = await client.get({
        collection_name: collectionName,
        ids: [1],
    });
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   data: [ { id: '1' } ]
    // }
    // 



    // Get a set of entities by their IDs
    res = await client.get({
        collection_name: collectionName,
        ids: [1, 2, 3],
    });
    
    console.log(res)

    // Output
    // 
    // {
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   data: [ { id: '1' }, { id: '2' }, { id: '3' } ]
    // }
    // 



    // Delete an entity by its ID
    res = await client.delete({
        collection_name: collectionName,
        ids: [0]
    });
    
    console.log(res);

    // Output
    // 
    // {
    //   succ_index: [],
    //   err_index: [],
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   IDs: {},
    //   acknowledged: false,
    //   insert_cnt: '0',
    //   delete_cnt: '1',
    //   upsert_cnt: '0',
    //   timestamp: '445473168870604807'
    // }
    // 



    // Delete a set of entities by their IDs
    res = await client.delete({
        collection_name: collectionName,
        ids: [1, 2, 3]
    });
    
    console.log(res);

    // Output
    // 
    // {
    //   succ_index: [],
    //   err_index: [],
    //   status: { error_code: 'Success', reason: '', code: 0 },
    //   IDs: {},
    //   acknowledged: false,
    //   insert_cnt: '0',
    //   delete_cnt: '3',
    //   upsert_cnt: '0',
    //   timestamp: '445473168870604812'
    // }
    // 


    res = client.delete({
        collection_name: collectionName,
        ids: [0]
    });

    console.log(res);

    // Output
    // 
    // Promise { <pending> }
    // 

    res = client.delete({
        collection_name: collectionName,
        ids: [1, 2, 3]
    });

    console.log(res)

    // Output
    // 
    // Promise { <pending> }
    // 


    // Drop collection
    res = await client.dropCollection({
        collection_name: collectionName
    });
    
    console.log(res);

    // Output
    // 
    // { error_code: 'Success', reason: '', code: 0 }
    // 



}

main()