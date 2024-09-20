// META: title=test WebNN API subgraph with multiple operations
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

const subgraphTests = [
  {
    'name': 'conv2d default + relu',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'relu',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            1.5323282480239868, 1.3573521375656128, 1.3641656637191772,
            1.071682333946228, 1.1259644031524658, 1.4713115692138672,
            1.078782320022583, 1.155018925666809, 1.656954288482666
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + sigmoid',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'sigmoid',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.8223466873168945, 0.7953290343284607, 0.7964358925819397,
            0.7449167370796204, 0.7550933957099915, 0.8132566809654236,
            0.7462635040283203, 0.7604264616966248, 0.83982872962951666
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + clamp',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'clamp',
          'arguments': [
            {'input': 'conv2dOutput'},
            {'options': {'minValue': 0, 'maxValue': 6}}
          ],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            1.5323282480239868, 1.3573521375656128, 1.3641656637191772,
            1.071682333946228, 1.1259644031524658, 1.4713115692138672,
            1.078782320022583, 1.155018925666809, 1.656954288482666
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      }
    }
  },
  {
    'name': 'conv2d default + leakyRelu',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'leakyRelu',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            1.5323282480239868, 1.3573521375656128, 1.3641656637191772,
            1.071682333946228, 1.1259644031524658, 1.4713115692138672,
            1.078782320022583, 1.155018925666809, 1.656954288482666
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + elu',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'elu',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            1.5323282480239868, 1.3573521375656128, 1.3641656637191772,
            1.071682333946228, 1.1259644031524658, 1.4713115692138672,
            1.078782320022583, 1.155018925666809, 1.656954288482666
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + prelu',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            -0.8073334693908691, -0.8839999437332153,  -0.7700487375259399,
            -0.5646049380302429, -0.39717939496040344, -0.10841356962919235,
            -0.5519214868545532, -0.3954172134399414,  -0.057589758187532425,
            -0.5144240856170654, -0.21321901679039001, -0.950609028339386,
            -0.8043696880340576, -0.8646378517150879,  -0.9607220888137817,
            -0.3264438509941101, -0.06884296983480453, -0.3203399181365967,
            -0.2692728042602539, -0.3430887758731842,  -0.8989502191543579,
            -0.9038569331169128, -0.6369403004646301,  -0.20070797204971313,
            -0.7870702147483826,
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        },
        'preluSlope': {
          'data': [
            2,
            3,
            4,
            -2,
            -4,
            -5,
            8,
            9,
            1,
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        },
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'prelu',
          'arguments': [{'input': 'conv2dOutput'}, {'slope': 'preluSlope'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            -4.119449138641357, -6.7131500244140625, -8.318120002746582,
            2.9565374851226807, 6.632988929748535, 8.277504920959473,
            -15.338706970214844, -16.247453689575195, -2.055551290512085
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + hardSwish',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'hardSwish',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            1.157502485501543, 0.9857435818773853, 0.9922408563279537,
            0.7272583864195519, 0.7742814812380979, 1.0964487730571852,
            0.7333530675289874, 0.7998542619888367, 1.2860601012485775
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + gelu',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'gelu',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            1.436219573020935, 1.2388081550598145, 1.2464958429336548,
            0.9195770025253296, 0.9794872999191284, 1.367431879043579,
            0.9273834228515625, 1.0117487907409668, 1.5761539936065674
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + hardSigmoid',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'hardSigmoid',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.8064656598030677, 0.7714704363749472, 0.7728331393335313,
            0.7143364781353666, 0.7251928745681375, 0.7942623204728064,
            0.7157564698643701, 0.7310037880065647, 0.8313908649162249
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + linear',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'linear',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            1.5323282480239868, 1.3573522567749023, 1.3641656637191772,
            1.0716824531555176, 1.1259644031524658, 1.4713115692138672,
            1.078782320022583, 1.155018925666809, 1.656954288482666
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + softplus',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'softplus',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            1.727921485900879, 1.5863515138626099, 1.591774344444275,
            1.366165280342102, 1.4068782329559326, 1.6780201196670532,
            1.371458888053894, 1.4288948774337769, 1.8315116167068481
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + softsign',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'softsign',
          'arguments': [{'input': 'conv2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.6051064941347312, 0.5757952470195913, 0.5770178031897163,
            0.5173005261326311, 0.5296252313655604, 0.5953565713674431,
            0.5189491577479364, 0.5359669553601377, 0.6236292092986385
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + relu',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'relu',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.1933533400297165, 0.5446354150772095, 0.3565753698348999,
            0.18010397255420685, 0.2787136137485504, 0.15542395412921906,
            0.0051351189613342285, 0.07771513611078262, 0.0008727149106562138
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + leakyRelu',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'leakyRelu',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.1933533400297165, 0.5446354150772095, 0.3565753698348999,
            0.18010397255420685, 0.2787136137485504, 0.15542395412921906,
            0.0051351189613342285, 0.07771513611078262, 0.0008727149106562138
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + sigmoid',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'sigmoid',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.5481882691383362, 0.6328900456428528, 0.588211178779602,
            0.5449046492576599, 0.5692307949066162, 0.5387779474258423,
            0.5012837648391724, 0.5194190144538879, 0.5002181529998779
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + softplus',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'softplus',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.7944898009300232, 1.0020939111709595, 0.8872446417808533,
            0.7872483730316162, 0.8421828746795654, 0.7738757133483887,
            0.6957180500030518, 0.7327595353126526, 0.693583607673645
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + clamp',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'clamp',
          'arguments': [
            {'input': 'convTranspose2dOutput'},
            {'options': {'minValue': 0, 'maxValue': 6}}
          ],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.1933533329919328, 0.5446354056033407, 0.3565753786367729,
            0.18010397583982396, 0.27871361683602214, 0.15542395985886007,
            0.005135118987714682, 0.07771513366674958, 0.0008727149065748813
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + elu',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'elu',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.1933533400297165, 0.5446354150772095, 0.3565753698348999,
            0.18010397255420685, 0.2787136137485504, 0.15542395412921906,
            0.0051351189613342285, 0.07771513611078262, 0.0008727149106562138
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + gelu',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'gelu',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.11149890720844269, 0.3850560784339905, 0.2279568910598755,
            0.10292303562164307, 0.16995054483413696, 0.08731041103601456,
            0.002578079467639327, 0.0412646159529686, 0.0004366612993180752
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + hardSigmoid',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'hardSigmoid',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.5386706590652466, 0.6089270710945129, 0.5713150501251221,
            0.536020815372467, 0.5557427406311035, 0.5310847759246826,
            0.5010270476341248, 0.5155430436134338, 0.5001745223999023
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + hardSwish',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'hardSwish',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.10290758311748505, 0.32175564765930176, 0.19947868585586548,
            0.09545823186635971, 0.15230369567871094, 0.08173808455467224,
            0.0025719543918967247, 0.03986417502164841, 0.00043648440623655915
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + linear',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'linear',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.1933533329919328, 0.5446354056033407, 0.3565753786367729,
            0.18010397583982396, 0.27871361683602214, 0.15542395985886007,
            0.005135118987714682, 0.07771513366674958, 0.0008727149065748813
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + prelu',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'preluSlope': {
          'data': [
            2,
            3,
            4,
            -2,
            -4,
            -5,
            8,
            9,
            1,
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        },
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'prelu',
          'arguments':
              [{'input': 'convTranspose2dOutput'}, {'slope': 'preluSlope'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.1933533329919328, 0.5446354056033407, 0.3565753786367729,
            0.18010397583982396, 0.27871361683602214, 0.15542395985886007,
            0.005135118987714682, 0.07771513366674958, 0.0008727149065748813
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + softsign',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'softsign',
          'arguments': [{'input': 'convTranspose2dOutput'}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.16202521324157715, 0.35259804129600525, 0.2628496587276459,
            0.15261703729629517, 0.2179640680551529, 0.13451682031154633,
            0.005108884070068598, 0.07211101800203323, 0.000871953961905092
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + relu',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'relu',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0,
            31.068212509155273,
            0,
            1.4459478855133057,
            22.170541763305664,
            0,
            0,
            18.583200454711914,
            0,
            17.820920944213867,
            16.2480411529541,
            16.447195053100586,
            11.57226848602295,
            1.8526301383972168,
            5.306026458740234,
            24.145092010498047,
            8.629376411437988,
            0,
            0,
            34.203548431396484,
            0,
            18.671411514282227,
            2.5159497261047363,
            4.921559810638428
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + leakyRelu',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'leakyRelu',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            -0.04312741756439209,   31.068212509155273, -0.13910239934921265,
            1.4459478855133057,     22.170541763305664, -0.06407354772090912,
            -0.06995829194784164,   18.583200454711914, -0.1083112508058548,
            17.820920944213867,     16.2480411529541,   16.447195053100586,
            11.57226848602295,      1.8526301383972168, 5.306026458740234,
            24.145092010498047,     8.629376411437988,  -0.0921698659658432,
            -0.0019894775468856096, 34.203548431396484, -0.1692316085100174,
            18.671411514282227,     2.5159497261047363, 4.921559810638428
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + sigmoid',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'sigmoid',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.013219666667282581,
            1,
            9.09618108835275e-7,
            0.8093740344047546,
            1,
            0.0016466662054881454,
            0.0009148556273430586,
            1,
            0.000019773951862589456,
            1,
            0.9999999403953552,
            0.9999999403953552,
            0.9999905824661255,
            0.864435613155365,
            0.9950628876686096,
            1,
            0.9998212456703186,
            0.00009932774992194027,
            0.45042645931243896,
            1,
            4.4705895874130874e-8,
            1,
            0.9252524375915527,
            0.992764949798584
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + clamp',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'clamp',
          'arguments': [
            {'input': 'bnOutput'}, {'options': {'minValue': 0, 'maxValue': 6}}
          ],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0,
            6,
            0,
            1.4459478855133057,
            6,
            0,
            0,
            6,
            0,
            6,
            6,
            6,
            6,
            1.8526301383972168,
            5.306026458740234,
            6,
            6,
            0,
            0,
            6,
            0,
            6,
            2.5159497261047363,
            4.921559810638428
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + prelu',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'preluSlope': {
          'data': [
            2, 3, 4, -2, -4, -5, 2, 3, 4, -2, -4, -5,
            2, 3, 4, -2, -4, -5, 2, 3, 4, -2, -4, -5,

          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'},
        },
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'prelu',
          'arguments': [{'input': 'bnOutput'}, {'slope': 'preluSlope'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            -8.625483512878418,  31.068212509155273, -55.640960693359375,
            1.4459478855133057,  22.170541763305664, 32.036773681640625,
            -13.991658210754395, 18.583200454711914, -43.324501037597656,
            17.820920944213867,  16.2480411529541,   16.447195053100586,
            11.57226848602295,   1.8526301383972168, 5.306026458740234,
            24.145092010498047,  8.629376411437988,  46.084930419921875,
            -0.397895485162735,  34.203548431396484, -67.69264221191406,
            18.671411514282227,  2.5159497261047363, 4.921559810638428
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + elu',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'elu',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            -0.9866032600402832,  31.068212509155273, -0.9999991059303284,
            1.4459478855133057,   22.170541763305664, -0.9983506202697754,
            -0.9990842938423157,  18.583200454711914, -0.9999802112579346,
            17.820920944213867,   16.2480411529541,   16.447195053100586,
            11.57226848602295,    1.8526301383972168, 5.306026458740234,
            24.145092010498047,   8.629376411437988,  -0.9999006390571594,
            -0.18040728569030762, 34.203548431396484, -0.9999999403953552,
            18.671411514282227,   2.5159497261047363, 4.921559810638428
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization options.axis=0 + gelu',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [-1, 0, 1, 2, 3, 4],
          'descriptor': {shape: [3, 1, 2], dataType: 'float32'}
        },
        'bnMean': {
          'data': [0, 3, 6],
          'descriptor': {shape: [3], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [1.0, 1.5, 2.0],
          'descriptor': {shape: [3], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'},
            {'variance': 'bnVariance'}, {'options': {'axis': 0}}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'gelu',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            -0.15865567326545715, 0, -0.08366739749908447, -0.16910307109355927,
            -0.03595117852091789, -0.1112278625369072
          ],
          'descriptor': {shape: [3, 1, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + hardSigmoid',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'hardSigmoid',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0,
            1,
            0,
            0.7891895771026611,
            1,
            0,
            0,
            1,
            0,
            1,
            1,
            1,
            1,
            0.8705260157585144,
            1,
            1,
            1,
            0,
            0.4602104425430298,
            1,
            0,
            1,
            1,
            1
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + hardSwish',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'hardSwish',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            -0,
            31.068212509155273,
            -0,
            1.0714348554611206,
            22.170541763305664,
            -0,
            -0,
            18.583200454711914,
            -0,
            17.820920944213867,
            16.2480411529541,
            16.447195053100586,
            11.57226848602295,
            1.4983549118041992,
            5.306026458740234,
            24.145092010498047,
            8.629376411437988,
            -0,
            -0.09287717193365097,
            34.203548431396484,
            -0,
            18.671411514282227,
            2.3129754066467285,
            4.921559810638428
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + linear',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'linear',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            -4.312741756439209,  31.068212509155273, -13.910240173339844,
            1.4459478855133057,  22.170541763305664, -6.407354354858398,
            -6.995829105377197,  18.583200454711914, -10.831125259399414,
            17.820920944213867,  16.2480411529541,   16.447195053100586,
            11.57226848602295,   1.8526301383972168, 5.306026458740234,
            24.145092010498047,  8.629376411437988,  -9.216986656188965,
            -0.1989477425813675, 34.203548431396484, -16.923160552978516,
            18.671411514282227,  2.5159497261047363, 4.921559810638428
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization options.axis=0 + softplus',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [-1, 0, 1, 2, 3, 4],
          'descriptor': {shape: [3, 1, 2], dataType: 'float32'}
        },
        'bnMean': {
          'data': [0, 3, 6],
          'descriptor': {shape: [3], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [1.0, 1.5, 2.0],
          'descriptor': {shape: [3], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'},
            {'variance': 'bnVariance'}, {'options': {'axis': 0}}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'softplus',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.31326302886009216, 0.6931471824645996, 0.17843490839004517,
            0.3660161793231964, 0.11321607977151871, 0.21762241423130035
          ],
          'descriptor': {shape: [3, 1, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization default + softsign',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [
            -41.30733108520508,  64.08863830566406,    -63.376670837402344,
            -46.790367126464844, 83.02227020263672,    -80.08049011230469,
            -62.144378662109375, -0.10012771934270859, -40.90216064453125,
            56.96306228637695,   37.37249755859375,    57.046478271484375,
            82.05680084228516,   -86.1164321899414,    76.8831787109375,
            97.03362274169922,   -21.35103988647461,   -96.93824005126953,
            -9.359310150146484,  80.20824432373047,    -85.36802673339844,
            62.35185241699219,   -68.4724349975586,    -12.10716724395752
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        },
        'bnMean': {
          'data': [
            -7.814267635345459, -95.64129638671875, 38.15440368652344,
            -55.95203399658203, -87.86500549316406, -41.63645553588867
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [
            60.31186294555664, 26.43260383605957, 53.275634765625,
            40.146121978759766, 59.41098403930664, 35.99981689453125
          ],
          'descriptor': {shape: [6], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'}, {'variance': 'bnVariance'}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'softsign',
          'arguments': [{'input': 'bnOutput'}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            -0.8117733001708984,  0.9688164591789246, -0.9329320192337036,
            0.5911605358123779,   0.956841766834259,  -0.8649990558624268,
            -0.8749347925186157,  0.9489358067512512, -0.9154771566390991,
            0.9468676447868347,   0.9420223832130432, 0.9426842331886292,
            0.9204598665237427,   0.6494463086128235, 0.8414215445518494,
            0.960230827331543,    0.8961511254310608, -0.9021238088607788,
            -0.16593527793884277, 0.9715937972068787, -0.9442062973976135,
            0.9491648077964783,   0.7155818343162537, 0.8311256170272827
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d default + softmax',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.6124474406242371,  0.8857858777046204,  0.13667134940624237,
            0.5645291209220886,  0.8965172171592712,  0.36792829632759094,
            0.6811466217041016,  0.0479511022567749,  0.33355462551116943,
            0.19882695376873016, 0.41167140007019043, 0.07934240251779556,
            0.4272463321685791,  0.535800576210022,   0.5910806059837341,
            0.28415432572364807, 0.4147258698940277,  0.026906268671154976,
            0.3621256649494171,  0.9945681691169739,  0.07184549421072006,
            0.12204372137784958, 0.8422137498855591,  0.4537501037120819,
            0.21529443562030792
          ],
          'descriptor': {shape: [1, 1, 5, 5], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.3804761469364166, 0.5280312299728394, 0.21947036683559418,
            0.36689770221710205, 0.33974137902259827, 0.4200059771537781,
            0.3805030882358551, 0.19443586468696594, 0.5686976909637451
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'},
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [{'input': 'conv2dInput'}, {'filter': 'conv2dFilter'}],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'softmax',
          'arguments': [{'input': 'conv2dOutput'}, {'axis': 1}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [1, 1, 1, 1, 1, 1, 1, 1, 1],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'conv2d with options.inputLayout=\'nchw\' + softmax',
    'graph': {
      'inputs': {
        'conv2dInput': {
          'data': [
            0.7529087066650391, 0.7520291805267334, 0.5949527621269226,
            0.2163185328245163, 0.07589349150657654, 0.151067852973938,
            0.1212485060095787, 0.5364335179328918, 0.5937089920043945,
            0.991003155708313, 0.3630942404270172, 0.9289674162864685,
            0.22727376222610474, 0.5414124131202698, 0.08445341885089874,
            0.6765284538269043, 0.6193256378173828, 0.3929215967655182
          ],
          'descriptor': {shape: [2, 1, 3, 3], dataType: 'float32'}
        },
        'conv2dFilter': {
          'data': [
            0.14543837308883667, 0.9671129584312439, 0.10836050659418106,
            0.3202308118343353, 0.6952692270278931, 0.5070913434028625,
            0.08139707148075104, 0.5303338766098022, 0.3072136342525482,
            0.43241235613822937, 0.9849002361297607, 0.4281076192855835
          ],
          'descriptor': {shape: [3, 1, 2, 2], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [
        {
          'name': 'conv2d',
          'arguments': [
            {'input': 'conv2dInput'}, {'filter': 'conv2dFilter'},
            {'options': {'inputLayout': 'nchw'}}
          ],
          'outputs': 'conv2dOutput'
        },
        {
          'name': 'softmax',
          'arguments': [{'input': 'conv2dOutput'}, {'axis': 1}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.3331032991409302,  0.324962317943573,   0.29539743065834045,
            0.2717963457107544,  0.3601743280887604,  0.38498347997665405,
            0.3584483861923218,  0.2951734662055969,  0.30672240257263184,
            0.29005417227745056, 0.34615418314933777, 0.4330301880836487,
            0.2580137252807617,  0.35141614079475403, 0.2865088880062103,
            0.2349148392677307,  0.4192594587802887,  0.2807352542877197,
            0.2830294668674469,  0.3250284790992737,  0.3227268159389496,
            0.36784860491752625, 0.4304616451263428,  0.4400566816329956
          ],
          'descriptor': {shape: [2, 3, 2, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'gemm default + softmax',
    'graph': {
      'inputs': {
        'inputA': {
          'data': [
            82.98884582519531, 90.51641082763672, 59.638519287109375,
            36.271873474121094, 18.9648494720459, 43.89479446411133,
            98.89488220214844, 91.46013641357422, 50.51683807373047,
            40.45679473876953, 50.76741409301758, 9.336554527282715
          ],
          'descriptor': {shape: [3, 4], dataType: 'float32'}
        },
        'inputB': {
          'data': [
            25.14739227294922,  66.6923828125,     63.29909896850586,
            10.629964828491211, 61.32737731933594, 0.0037256532814353704,
            16.4991455078125,   3.036668062210083, 93.14022064208984,
            70.08265686035156,  75.74880981445312, 96.60688018798828,
            99.10041809082031,  23.2437744140625,  86.11856842041016,
            42.90679168701172,  34.08055114746094, 87.37654876708984,
            92.34209442138672,  60.32209014892578
          ],
          'descriptor': {shape: [4, 5], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'gemm',
          'arguments': [{'a': 'inputA'}, {'b': 'inputB'}],
          'outputs': 'gemmOutput'
        },
        {
          'name': 'softmax',
          'arguments': [{'input': 'gemmOutput'}, {'axis': 1}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
          'descriptor': {shape: [3, 5], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d default + softmax',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.5872158408164978, 0.6077792048454285, 0.017289165407419205,
            0.2614607512950897
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.3292713165283203, 0.5866857171058655, 0.29701370000839233,
            0.0033378428779542446
          ],
          'descriptor': {shape: [1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'softmax',
          'arguments': [{'input': 'convTranspose2dOutput'}, , {'axis': 1}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [1, 1, 1, 1, 1, 1, 1, 1, 1],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'convTranspose2d with options.inputLayout=nchw + softmax',
    'graph': {
      'inputs': {
        'convTranspose2dInput': {
          'data': [
            0.05605664849281311, 0.7114229798316956, 0.6529743671417236,
            0.38622909784317017, 0.3870837390422821, 0.9461629390716553,
            0.09573192149400711, 0.9234652519226074, 0.636277973651886
          ],
          'descriptor': {shape: [1, 1, 3, 3], dataType: 'float32'}
        },
        'convTranspose2dFilter': {
          'data': [
            0.8614422678947449, 0.6267672777175903, 0.6366490125656128,
            0.8382642269134521, 0.11884837597608566, 0.9921330213546753,
            0.3285411298274994, 0.8742373585700989, 0.7205492258071899,
            0.9801966547966003, 0.06169835478067398, 0.3220160901546478,
            0.7498031854629517, 0.3930714726448059, 0.13811933994293213,
            0.28385090827941895, 0.4235861301422119, 0.1448512077331543
          ],
          'descriptor': {shape: [1, 2, 3, 3], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [
        {
          'name': 'convTranspose2d',
          'arguments': [
            {'input': 'convTranspose2dInput'},
            {'filter': 'convTranspose2dFilter'},
            {'options': {'inputLayout': 'nchw'}}
          ],
          'outputs': 'convTranspose2dOutput'
        },
        {
          'name': 'softmax',
          'arguments': [{'input': 'convTranspose2dOutput'}, , {'axis': 1}],
          'outputs': 'output'
        },
      ],
      'expectedOutputs': {
        'output': {
          'data': [
            0.49833576343872565, 0.4868008917870872,  0.5846997575195981,
            0.6440102325142313,  0.551181906978995,   0.4897745354808822,
            0.5547395504993903,  0.5345537346530161,  0.7474278654695712,
            0.7016867653522572,  0.5063253693672739,  0.48246072443639854,
            0.7623912436471291,  0.8061268489635616,  0.7996560653284985,
            0.506431947475152,   0.5613868238161465,  0.5802700289121353,
            0.7796113177719141,  0.7480226893035377,  0.5010695683288174,
            0.521090376342132,   0.6223909030394784,  0.6938916162243012,
            0.5905655851990261,  0.5016642365612743,  0.5131991082129128,
            0.4153002424804018,  0.35598976748576877, 0.44881809302100495,
            0.5102254645191179,  0.4452604495006097,  0.4654462653469838,
            0.2525721345304288,  0.29831323464774284, 0.4936746306327262,
            0.5175392755636015,  0.237608756352871,   0.19387315103643848,
            0.20034393467150155, 0.493568052524848,   0.43861317618385354,
            0.4197299710878647,  0.22038868222808597, 0.2519773106964624,
            0.4989304316711825,  0.4789096236578681,  0.37760909696052153,
            0.30610838377569893, 0.409434414800974
          ],
          'descriptor': {shape: [1, 2, 5, 5], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'batchNormalization options.axis=0  + softmax',
    'graph': {
      'inputs': {
        'bnInput': {
          'data': [-1, 0, 1, 2, 3, 4],
          'descriptor': {shape: [3, 1, 2], dataType: 'float32'}
        },
        'bnMean': {
          'data': [0, 3, 6],
          'descriptor': {shape: [3], dataType: 'float32'}
        },
        'bnVariance': {
          'data': [1.0, 1.5, 2.0],
          'descriptor': {shape: [3], dataType: 'float32'}
        }
      },
      'operators': [
        {
          'name': 'batchNormalization',
          'arguments': [
            {'input': 'bnInput'}, {'mean': 'bnMean'},
            {'variance': 'bnVariance'}, {'options': {'axis': 0}}
          ],
          'outputs': 'bnOutput'
        },
        {
          'name': 'softmax',
          'arguments': [{'input': 'bnOutput'}, {'axis': 1}],
          'outputs': 'output'
        }
      ],
      'expectedOutputs': {
        'output': {
          'data': [1, 1, 1, 1, 1, 1],
          'descriptor': {shape: [3, 1, 2], dataType: 'float32'}
        }
      }
    }
  },
];

if (navigator.ml) {
  subgraphTests.forEach((test) => {
    webnn_conformance_test(buildGraphAndCompute, getPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
