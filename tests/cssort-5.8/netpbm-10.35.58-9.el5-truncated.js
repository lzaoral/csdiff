{
    "defects":
    [
        {
            "checker": "BAD_FREE",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/readframe.c",
                    "line": 327,
                    "event": "address_free",
                    "message": "\"Frame_Resize\" frees address of \"tempFrame\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/frame.c",
                    "line": 835,
                    "event": "freed_arg",
                    "message": "\"free\" frees parameter \"mf\"."
                }
            ]
        },
        {
            "checker": "BAD_FREE",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 352,
                    "event": "address_free",
                    "message": "\"mergeInputSource\" frees address of \"subInputSource\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 298,
                    "event": "freed_arg",
                    "message": "\"free\" frees parameter \"addedSourceP\"."
                }
            ]
        },
        {
            "checker": "BAD_SIZEOF",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_enc.c",
                    "line": 2109,
                    "event": "bad_sizeof",
                    "message": "Taking the size of binary expression \"tcmpt->numstepsizes * sizeof (uint_fast16_t) /*8*/\" is suspicious.  Did you intend \"sizeof(tcmpt->numstepsizes) * sizeof (uint_fast16_t) /*8*/\"?"
                }
            ]
        },
        {
            "checker": "BUFFER_SIZE_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/xpmtoppm.c",
                    "line": 154,
                    "event": "buffer_size_warning",
                    "message": "Calling strncpy with a maximum size argument of 8193 bytes on destination array \"lastInputLine\" of size 8193 bytes might leave the destination string unterminated."
                }
            ]
        },
        {
            "checker": "BUFFER_SIZE_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/other/pamx/window.c",
                    "line": 499,
                    "event": "buffer_size_warning",
                    "message": "Calling strncpy with a maximum size argument of 8192 bytes on destination array \"buf\" of size 8192 bytes might leave the destination string unterminated."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 3,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/util.c",
                    "line": 37,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"a\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/util.c",
                    "line": 37,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"b\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/util.c",
                    "line": 38,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"c\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/util.c",
                    "line": 38,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"d\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/util.c",
                    "line": 21,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"a\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/util.c",
                    "line": 21,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"b\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/camera.c",
                    "line": 896,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"c\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/camera.c",
                    "line": 958,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"c\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/canon.c",
                    "line": 147,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"c\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/urt/rle_getskip.c",
                    "line": 77,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"inst[0]\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/urt/rle_getskip.c",
                    "line": 78,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"inst[1]\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/urt/rle_getrow.c",
                    "line": 397,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"inst[0]\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/urt/rle_getrow.c",
                    "line": 398,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"inst[1]\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/xwdtopnm.c",
                    "line": 887,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"item8\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 130,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"ch\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/mgrtopbm.c",
                    "line": 90,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"item\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pgm/lispmtopgm.c",
                    "line": 91,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"magic[i]\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 3,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pgm/spottopgm.c",
                    "line": 208,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"arecord.sub1\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pgm/spottopgm.c",
                    "line": 209,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"arecord.type\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pgm/spottopgm.c",
                    "line": 210,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"arecord.sub2\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pgm/spottopgm.c",
                    "line": 211,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"arecord.sub3\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/leaftoppm.c",
                    "line": 64,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"compressed\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/pc1toppm.c",
                    "line": 76,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"*(*lineposP)++\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/pc1toppm.c",
                    "line": 82,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"duplicated_color\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 2,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/spctoppm.c",
                    "line": 137,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"h\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/spctoppm.c",
                    "line": 144,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"c\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/spctoppm.c",
                    "line": 152,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"c\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/spctoppm.c",
                    "line": 52,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"c1\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/spctoppm.c",
                    "line": 53,
                    "event": "char_io",
                    "message": "Assigning the return value of \"_IO_getc\" to char \"c2\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/ppmdfont.c",
                    "line": 29,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"glyphCommandP->x\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/ppmdfont.c",
                    "line": 30,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"glyphCommandP->y\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 2,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/ppmdfont.c",
                    "line": 17,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"glyphHeaderP->commandCount\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/ppmdfont.c",
                    "line": 18,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"glyphHeaderP->skipBefore\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/ppmdfont.c",
                    "line": 19,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"glyphHeaderP->skipAfter\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHAR_IO",
            "key_event_idx": 2,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/ppmdfont.c",
                    "line": 67,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"fontHeaderP->format\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/ppmdfont.c",
                    "line": 68,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"fontHeaderP->characterCount\" truncates its value."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/ppmdfont.c",
                    "line": 69,
                    "event": "char_io",
                    "message": "Assigning the return value of \"fgetc\" to char \"fontHeaderP->firstCodePoint\" truncates its value."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 521,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 521,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(line, \"docurl=%s\", docurl)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/camera.c",
                    "line": 1261,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/camera.c",
                    "line": 1261,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(val, \"%d.%d.%d\", &t.tm_mday, &t.tm_mon, &t.tm_year)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/camera.c",
                    "line": 1263,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/cameratopam/camera.c",
                    "line": 1263,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(val, \"%d:%d:%d\", &t.tm_hour, &t.tm_min, &t.tm_sec)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t2enc.c",
                    "line": 387,
                    "event": "check_return",
                    "message": "Calling function \"jpc_putms\" without checking return value (as is done elsewhere 12 out of 13 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_enc.c",
                    "line": 356,
                    "event": "example_checked",
                    "message": "\"jpc_putms(enc->out, enc->cstate, enc->mrk)\" has its value checked in \"jpc_putms(enc->out, enc->cstate, enc->mrk)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_enc.c",
                    "line": 946,
                    "event": "example_checked",
                    "message": "\"jpc_putms(enc->out, enc->cstate, enc->mrk)\" has its value checked in \"jpc_putms(enc->out, enc->cstate, enc->mrk)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_enc.c",
                    "line": 976,
                    "event": "example_checked",
                    "message": "\"jpc_putms(enc->out, enc->cstate, enc->mrk)\" has its value checked in \"jpc_putms(enc->out, enc->cstate, enc->mrk)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_enc.c",
                    "line": 993,
                    "event": "example_checked",
                    "message": "\"jpc_putms(enc->out, enc->cstate, enc->mrk)\" has its value checked in \"jpc_putms(enc->out, enc->cstate, enc->mrk)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_enc.c",
                    "line": 1062,
                    "event": "example_checked",
                    "message": "\"jpc_putms(enc->out, enc->cstate, enc->mrk)\" has its value checked in \"jpc_putms(enc->out, enc->cstate, enc->mrk)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t2enc.c",
                    "line": 387,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"jpc_putms(out, enc->cstate, ms)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 1014,
                    "event": "check_return",
                    "message": "Calling function \"jpc_getuint16\" without checking return value (as is done elsewhere 14 out of 16 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 292,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &ms->id)\" has its value checked in \"jpc_getuint16(in, &ms->id)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 307,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &ms->len)\" has its value checked in \"jpc_getuint16(in, &ms->len)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 477,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &sot->tileno)\" has its value checked in \"jpc_getuint16(in, &sot->tileno)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 526,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &siz->numcomps)\" has its value checked in \"jpc_getuint16(in, &siz->numcomps)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 626,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &cod->numlyrs)\" has its value checked in \"jpc_getuint16(in, &cod->numlyrs)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 1014,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"jpc_getuint16(in, compparms->stepsizes + i)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 986,
                    "event": "check_return",
                    "message": "Calling function \"jpc_getuint8\" without checking return value (as is done elsewhere 17 out of 20 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 477,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &sot->numparts)\" has its value checked in \"jpc_getuint8(in, &sot->numparts)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 546,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &(siz->comps + i).hsamp)\" has its value checked in \"jpc_getuint8(in, &(siz->comps + i).hsamp)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 623,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &cod->csty)\" has its value checked in \"jpc_getuint8(in, &cod->csty)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 626,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &cod->mctrans)\" has its value checked in \"jpc_getuint8(in, &cod->mctrans)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 697,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &tmp)\" has its value checked in \"jpc_getuint8(in, &tmp)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 986,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"jpc_getuint8(in, &tmp)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 926,
                    "event": "check_return",
                    "message": "Calling function \"jpc_getuint16\" without checking return value (as is done elsewhere 14 out of 16 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 292,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &ms->id)\" has its value checked in \"jpc_getuint16(in, &ms->id)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 307,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &ms->len)\" has its value checked in \"jpc_getuint16(in, &ms->len)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 477,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &sot->tileno)\" has its value checked in \"jpc_getuint16(in, &sot->tileno)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 526,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &siz->numcomps)\" has its value checked in \"jpc_getuint16(in, &siz->numcomps)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 626,
                    "event": "example_checked",
                    "message": "\"jpc_getuint16(in, &cod->numlyrs)\" has its value checked in \"jpc_getuint16(in, &cod->numlyrs)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 926,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"jpc_getuint16(in, &qcc->compno)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 922,
                    "event": "check_return",
                    "message": "Calling function \"jpc_getuint8\" without checking return value (as is done elsewhere 17 out of 20 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 477,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &sot->numparts)\" has its value checked in \"jpc_getuint8(in, &sot->numparts)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 546,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &(siz->comps + i).hsamp)\" has its value checked in \"jpc_getuint8(in, &(siz->comps + i).hsamp)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 623,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &cod->csty)\" has its value checked in \"jpc_getuint8(in, &cod->csty)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 626,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &cod->mctrans)\" has its value checked in \"jpc_getuint8(in, &cod->mctrans)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 697,
                    "event": "example_checked",
                    "message": "\"jpc_getuint8(in, &tmp)\" has its value checked in \"jpc_getuint8(in, &tmp)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 922,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"jpc_getuint8(in, &tmp)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 1037,
                    "event": "check_return",
                    "message": "Calling function \"jpc_putuint16\" without checking return value (as is done elsewhere 11 out of 13 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 376,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, ms->id)\" has its value checked in \"jpc_putuint16(out, ms->id)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 399,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, ms->len + 2UL)\" has its value checked in \"jpc_putuint16(out, ms->len + 2UL)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 492,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, sot->tileno)\" has its value checked in \"jpc_putuint16(out, sot->tileno)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 568,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, siz->numcomps)\" has its value checked in \"jpc_putuint16(out, siz->numcomps)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 647,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, cod->numlyrs)\" has its value checked in \"jpc_putuint16(out, cod->numlyrs)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 1037,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"jpc_putuint16(out, compparms->stepsizes[i])\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 945,
                    "event": "check_return",
                    "message": "Calling function \"jpc_putuint16\" without checking return value (as is done elsewhere 11 out of 13 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 376,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, ms->id)\" has its value checked in \"jpc_putuint16(out, ms->id)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 399,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, ms->len + 2UL)\" has its value checked in \"jpc_putuint16(out, ms->len + 2UL)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 492,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, sot->tileno)\" has its value checked in \"jpc_putuint16(out, sot->tileno)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 568,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, siz->numcomps)\" has its value checked in \"jpc_putuint16(out, siz->numcomps)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 647,
                    "event": "example_checked",
                    "message": "\"jpc_putuint16(out, cod->numlyrs)\" has its value checked in \"jpc_putuint16(out, cod->numlyrs)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 945,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"jpc_putuint16(out, qcc->compno)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/pbmtolps.c",
                    "line": 118,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/pbmtolps.c",
                    "line": 118,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(argv[i + 1], \"%f\", &dpi)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/imgtoppm.c",
                    "line": 72,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/imgtoppm.c",
                    "line": 72,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf((char *)buf, \"%4u%4u%4u\", &cols, &rows, &cmaplen)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtoarbtxt.c",
                    "line": 294,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtoarbtxt.c",
                    "line": 294,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(objstr, \"%s\", typstr)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 178,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 178,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(p, \"%f\", &ratio)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 265,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 265,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(p, \"%f\", &rate)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 231,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 231,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(charPtr, \"%s %s %s %s\", machineName[numMachines], userName[numMachines], executable[numMachines], remoteParamFile[numMachines])\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 237,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 237,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(input, \"%s %s %s\", machineName[numMachines], userName[numMachines], executable[numMachines])\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 759,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 759,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(SkipSpacesTabs(input + 5), \"%f\", &GammaValue)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 858,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 858,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(arg, \"%dx%d\", &outputWidth, &outputHeight)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 883,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 883,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(arg, \"%dx%d\", &yuvWidth, &yuvHeight)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 915,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 915,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(arg, \"%dx%d\", &yuvWidth, &yuvHeight)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 922,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/param.c",
                    "line": 922,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(arg, \"%dx%d\", &yuvWidth, &yuvHeight)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/specifics.c",
                    "line": 264,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/specifics.c",
                    "line": 264,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(lp, \"%d %c %d\", &fnum, &typ, &qs)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/specifics.c",
                    "line": 277,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/specifics.c",
                    "line": 277,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(lp, \"%d %d\", &snum, &newqs)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/specifics.c",
                    "line": 325,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/specifics.c",
                    "line": 325,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(lp, \"%d %c %d\", &fnum, &typ, &qs)\"."
                }
            ]
        },
        {
            "checker": "CHECKED_RETURN",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/specifics.c",
                    "line": 338,
                    "event": "check_return",
                    "message": "Calling function \"sscanf\" without checking return value (as is done elsewhere 154 out of 182 times)."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/colorname.c",
                    "line": 125,
                    "event": "example_checked",
                    "message": "\"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname)\" has its value checked in \"sscanf(buf, \"%ld %ld %ld %[^\\n]\", &retval.r, &retval.g, &retval.b, colorname) == 4\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 226,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"rgbi:%f/%f/%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libppmcolor.c",
                    "line": 354,
                    "event": "example_checked",
                    "message": "\"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb)\" has its value checked in \"sscanf(colorname, \"%f,%f,%f\", &fr, &fg, &fb) != 3\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/macptopbm.c",
                    "line": 42,
                    "event": "example_checked",
                    "message": "\"sscanf(argv[argn], \"%d\", &extraskip)\" has its value checked in \"sscanf(argv[argn], \"%d\", &extraskip) != 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/pbm/xbmtopbm.c",
                    "line": 112,
                    "event": "example_checked",
                    "message": "\"sscanf(line, \"#define %s %d\", name_and_type, &v)\" has its value checked in \"sscanf(line, \"#define %s %d\", name_and_type, &v) == 2\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/specifics.c",
                    "line": 338,
                    "event": "unchecked_value",
                    "message": "No check of the return value of \"sscanf(lp, \"%d %d\", &snum, &newqs)\"."
                }
            ]
        },
        {
            "checker": "CONSTANT_EXPRESSION_RESULT",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/bmptopnm.c",
                    "line": 893,
                    "event": "operator_confusion",
                    "message": "(ptr[i + 1U] << 4) & (ptr[i + 2U] >> 4) is always 0 regardless of the values of its operands. This occurs as the non-specific operand of assignment. Did you intend to use right-shift ('>>') in ptr[i + 1U] << 4?"
                }
            ]
        },
        {
            "checker": "CONSTANT_EXPRESSION_RESULT",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_cs.c",
                    "line": 1012,
                    "event": "missing_parentheses",
                    "message": "(tmp >> 3) & -32 /* ~0x1f */ is always 0 regardless of the values of its operands. This occurs as the logical operand of '!'. Did you intend to apply '&' to 3 and -32 /* ~0x1f */? If so, parentheses would be required to force this interpretation."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 528,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"docurl == NULL\" cannot be false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 514,
                    "event": "const",
                    "message": "After this line, the value of \"docurl\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 524,
                    "event": "const",
                    "message": "After this line, the value of \"docurl\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 514,
                    "event": "assignment",
                    "message": "Assigning: \"docurl\" = \"NULL\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 516,
                    "event": "assignment",
                    "message": "Assigning: \"docurl\" = \"NULL\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 524,
                    "event": "new_values",
                    "message": "Noticing condition \"docurl == NULL\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/lib/libpm.c",
                    "line": 534,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"pm_message(\"This program is...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 9,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 482,
                    "event": "dead_error_condition",
                    "message": "On this path, the switch value \"mctype\" cannot reach the default case."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 470,
                    "event": "const",
                    "message": "After this line, the value of \"mctype\" is equal to 1."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 472,
                    "event": "const",
                    "message": "After this line, the value of \"mctype\" is equal to 2."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 477,
                    "event": "const",
                    "message": "After this line, the value of \"mctype\" is equal to 2."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 479,
                    "event": "const",
                    "message": "After this line, the value of \"mctype\" is equal to 3."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 472,
                    "event": "assignment",
                    "message": "Assigning: \"mctype\" = \"BACKWARD\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 477,
                    "event": "assignment",
                    "message": "Assigning: \"mctype\" = \"BACKWARD\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 470,
                    "event": "assignment",
                    "message": "Assigning: \"mctype\" = \"FORWARD\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 479,
                    "event": "assignment",
                    "message": "Assigning: \"mctype\" = \"INTERPOLATED\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/codec/mwfa.c",
                    "line": 525,
                    "event": "dead_error_begin",
                    "message": "Execution cannot reach this statement \"default:\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 11,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 125,
                    "event": "dead_error_condition",
                    "message": "On this path, the switch value \"bpp\" cannot reach the default case."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 117,
                    "event": "const",
                    "message": "After this line, the value of \"bpp\" is equal to 16."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 117,
                    "event": "const",
                    "message": "After this line, the value of \"bpp\" is equal to 24."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 117,
                    "event": "const",
                    "message": "After this line, the value of \"bpp\" is equal to 32."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 117,
                    "event": "equality_cond",
                    "message": "Condition \"bpp == 16U\" is evaluated as false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 108,
                    "event": "equality_cond",
                    "message": "Condition \"bpp != 16U\" is evaluated as true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 108,
                    "event": "equality_cond",
                    "message": "Condition \"bpp != 24U\" is evaluated as true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 108,
                    "event": "new_values",
                    "message": "Noticing condition \"bpp != 16U\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 108,
                    "event": "new_values",
                    "message": "Noticing condition \"bpp != 24U\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 108,
                    "event": "new_values",
                    "message": "Noticing condition \"bpp != 32U\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 117,
                    "event": "new_values",
                    "message": "Noticing condition \"bpp == 16U\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/fiasco/lib/dither.c",
                    "line": 139,
                    "event": "dead_error_begin",
                    "message": "Execution cannot reach this statement \"default:\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 5,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 455,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"hc < 0\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "const",
                    "message": "After this line, the value of \"hc\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 448,
                    "event": "assignment",
                    "message": "Assigning: \"hc\" = \"((((f & 0x220) == 0x20) + ((f & 0x880) == 0x80) < 1) ? ((f & 0x220) == 0x20) + ((f & 0x880) == 0x80) : 1) - ((((f & 0x220) == 0x220) + ((f & 0x880) == 0x880) < 1) ? ((f & 0x220) == 0x220) + ((f & 0x880) == 0x880) : 1)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "new_values",
                    "message": "Noticing condition \"hc <= 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "new_values",
                    "message": "Noticing condition \"hc >= -1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 456,
                    "event": "dead_error_begin",
                    "message": "Execution cannot reach this statement \"hc = -hc;\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 5,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 460,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"vc == -1\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "const",
                    "message": "After this line, the value of \"vc\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 451,
                    "event": "assignment",
                    "message": "Assigning: \"vc\" = \"((((f & 0x110) == 0x10) + ((f & 0x440) == 0x40) < 1) ? ((f & 0x110) == 0x10) + ((f & 0x440) == 0x40) : 1) - ((((f & 0x110) == 0x110) + ((f & 0x440) == 0x440) < 1) ? ((f & 0x110) == 0x110) + ((f & 0x440) == 0x440) : 1)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "new_values",
                    "message": "Noticing condition \"vc <= 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "new_values",
                    "message": "Noticing condition \"vc >= -1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 461,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"n = 1;\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 459,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"hc\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 455,
                    "event": "const",
                    "message": "After this line, the value of \"hc\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 448,
                    "event": "assignment",
                    "message": "Assigning: \"hc\" = \"((((f & 0x220) == 0x20) + ((f & 0x880) == 0x80) < 1) ? ((f & 0x220) == 0x20) + ((f & 0x880) == 0x80) : 1) - ((((f & 0x220) == 0x220) + ((f & 0x880) == 0x880) < 1) ? ((f & 0x220) == 0x220) + ((f & 0x880) == 0x880) : 1)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 455,
                    "event": "new_values",
                    "message": "Noticing condition \"hc < 0\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "new_values",
                    "message": "Noticing condition \"hc <= 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "new_values",
                    "message": "Noticing condition \"hc >= -1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 467,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"if (hc == 1){\n  if (vc == -...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 462,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"vc\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 460,
                    "event": "const",
                    "message": "After this line, the value of \"vc\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 451,
                    "event": "assignment",
                    "message": "Assigning: \"vc\" = \"((((f & 0x110) == 0x10) + ((f & 0x440) == 0x40) < 1) ? ((f & 0x110) == 0x10) + ((f & 0x440) == 0x40) : 1) - ((((f & 0x110) == 0x110) + ((f & 0x440) == 0x440) < 1) ? ((f & 0x110) == 0x110) + ((f & 0x440) == 0x440) : 1)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 460,
                    "event": "equality_cond",
                    "message": "Condition \"vc == -1\" is evaluated as false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "new_values",
                    "message": "Noticing condition \"vc <= 1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 454,
                    "event": "new_values",
                    "message": "Noticing condition \"vc >= -1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 465,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"n = 1;\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 431,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"hc\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 427,
                    "event": "const",
                    "message": "After this line, the value of \"hc\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 427,
                    "event": "assignment",
                    "message": "Assigning: \"hc\" = \"((((f & 0x220) == 0x20) + ((f & 0x880) == 0x80) < 1) ? ((f & 0x220) == 0x20) + ((f & 0x880) == 0x80) : 1) - ((((f & 0x220) == 0x220) + ((f & 0x880) == 0x880) < 1) ? ((f & 0x220) == 0x220) + ((f & 0x880) == 0x880) : 1)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 431,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"vc\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 429,
                    "event": "const",
                    "message": "After this line, the value of \"vc\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 429,
                    "event": "assignment",
                    "message": "Assigning: \"vc\" = \"((((f & 0x110) == 0x10) + ((f & 0x440) == 0x40) < 1) ? ((f & 0x110) == 0x10) + ((f & 0x440) == 0x40) : 1) - ((((f & 0x110) == 0x110) + ((f & 0x440) == 0x440) < 1) ? ((f & 0x110) == 0x110) + ((f & 0x440) == 0x440) : 1)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 434,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this expression \"n\" inside statement \"n = !(hc > 0 || (!hc && vc ...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 4,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 390,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"d\" cannot be false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 352,
                    "event": "const",
                    "message": "After this line, the value of \"d\" is equal to 3."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 352,
                    "event": "const",
                    "message": "After this line, the value of \"d\" is equal to 4."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 352,
                    "event": "assignment",
                    "message": "Assigning: \"d\" = \"((f & 8) != 0) + ((f & 1) != 0) + ((f & 2) != 0) + ((f & 4) != 0)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 391,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"if (!hv){\n  n = 0;\n}\nelse i...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 5,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 398,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"d == 1\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 390,
                    "event": "const",
                    "message": "After this line, the value of \"d\" is equal to 3."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 390,
                    "event": "const",
                    "message": "After this line, the value of \"d\" is equal to 4."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 352,
                    "event": "assignment",
                    "message": "Assigning: \"d\" = \"((f & 8) != 0) + ((f & 1) != 0) + ((f & 2) != 0) + ((f & 4) != 0)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 390,
                    "event": "equality_cond",
                    "message": "Condition \"d\" is evaluated as true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 399,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"if (!hv){\n  n = 3;\n}\nelse i...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 6,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 406,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"d == 2\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 398,
                    "event": "const",
                    "message": "After this line, the value of \"d\" is equal to 3."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 398,
                    "event": "const",
                    "message": "After this line, the value of \"d\" is equal to 4."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 352,
                    "event": "assignment",
                    "message": "Assigning: \"d\" = \"((f & 8) != 0) + ((f & 1) != 0) + ((f & 2) != 0) + ((f & 4) != 0)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 398,
                    "event": "equality_cond",
                    "message": "Condition \"d == 1\" is evaluated as false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 390,
                    "event": "equality_cond",
                    "message": "Condition \"d\" is evaluated as true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 407,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"if (!hv){\n  n = 6;\n}\nelse {...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 8,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 360,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"h\" cannot be false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 350,
                    "event": "const",
                    "message": "After this line, the value of \"h\" is equal to 1."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 356,
                    "event": "const",
                    "message": "After this line, the value of \"h\" is equal to 1."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 350,
                    "event": "const",
                    "message": "After this line, the value of \"h\" is equal to 2."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 356,
                    "event": "const",
                    "message": "After this line, the value of \"h\" is equal to 2."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 350,
                    "event": "assignment",
                    "message": "Assigning: \"h\" = \"((f & 0x80) != 0) + ((f & 0x20) != 0)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 356,
                    "event": "assignment",
                    "message": "Assigning: \"h\" = \"v\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 351,
                    "event": "assignment",
                    "message": "Assigning: \"v\" = \"((f & 0x10) != 0) + ((f & 0x40) != 0)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 361,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"if (!v){\n  if (!d){\n    n =...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 8,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 375,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"v\" cannot be false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 351,
                    "event": "const",
                    "message": "After this line, the value of \"v\" is equal to 1."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 357,
                    "event": "const",
                    "message": "After this line, the value of \"v\" is equal to 1."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 351,
                    "event": "const",
                    "message": "After this line, the value of \"v\" is equal to 2."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 357,
                    "event": "const",
                    "message": "After this line, the value of \"v\" is equal to 2."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 350,
                    "event": "assignment",
                    "message": "Assigning: \"h\" = \"((f & 0x80) != 0) + ((f & 0x20) != 0)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 351,
                    "event": "assignment",
                    "message": "Assigning: \"v\" = \"((f & 0x10) != 0) + ((f & 0x40) != 0)\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 357,
                    "event": "assignment",
                    "message": "Assigning: \"v\" = \"t\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/jpeg2000/libjasper/jpc/jpc_t1cod.c",
                    "line": 376,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"if (!d){\n  n = 5;\n}\nelse {\n...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 3,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/pnmtojpeg.c",
                    "line": 298,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"dctval == NULL\" cannot be false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/pnmtojpeg.c",
                    "line": 261,
                    "event": "const",
                    "message": "After this line, the value of \"dctval\" is equal to 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/pnmtojpeg.c",
                    "line": 261,
                    "event": "assignment",
                    "message": "Assigning: \"dctval\" = \"NULL\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/other/pnmtojpeg.c",
                    "line": 301,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"if (streq(dctval, \"int\"))cm...\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 2,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/postdct.c",
                    "line": 238,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"level == 0\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/postdct.c",
                    "line": 220,
                    "event": "cannot_single",
                    "message": "After this line (or expression), the value of \"level\" cannot be 0."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/converter/ppm/ppmtompeg/postdct.c",
                    "line": 239,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"coeff = 0;\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 18,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 220,
                    "event": "dead_error_condition",
                    "message": "On this path, the switch value \"(format == 20531 || format == 20534) ? 20531 : ((format == 20530 || format == 20533) ? 20530 : ((format == 20529 || format == 20532) ? 20529 : -1))\" cannot be \"20535\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "const",
                    "message": "After this line, the value of \"format\" is equal to 20529."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "const",
                    "message": "After this line, the value of \"format\" is equal to 20530."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "const",
                    "message": "After this line, the value of \"format\" is equal to 20531."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "const",
                    "message": "After this line, the value of \"format\" is equal to 20532."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "const",
                    "message": "After this line, the value of \"format\" is equal to 20533."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "const",
                    "message": "After this line, the value of \"format\" is equal to 20534."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "equality_cond",
                    "message": "Condition \"format == 20529\" is evaluated as false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "equality_cond",
                    "message": "Condition \"format == 20530\" is evaluated as false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "equality_cond",
                    "message": "Condition \"format == 20531\" is evaluated as false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "equality_cond",
                    "message": "Condition \"format == 20533\" is evaluated as false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "equality_cond",
                    "message": "Condition \"format == 20534\" is evaluated as false."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "new_values",
                    "message": "Noticing condition \"format == 20529\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "new_values",
                    "message": "Noticing condition \"format == 20530\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "new_values",
                    "message": "Noticing condition \"format == 20531\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "new_values",
                    "message": "Noticing condition \"format == 20532\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "new_values",
                    "message": "Noticing condition \"format == 20533\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 216,
                    "event": "new_values",
                    "message": "Noticing condition \"format == 20534\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamdice.c",
                    "line": 220,
                    "event": "dead_error_begin",
                    "message": "Execution cannot reach this statement \"case 20535:\"."
                }
            ]
        },
        {
            "checker": "DEADCODE",
            "key_event_idx": 3,
            "events":
            [
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamscale.c",
                    "line": 644,
                    "event": "dead_error_condition",
                    "message": "On this path, the condition \"xsize == 0\" cannot be true."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamscale.c",
                    "line": 624,
                    "event": "const",
                    "message": "After this line, the value of \"xsize\" is equal to -1."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamscale.c",
                    "line": 624,
                    "event": "assignment",
                    "message": "Assigning: \"xsize\" = \"-1\"."
                },
                {
                    "file_name": "/builddir/build/BUILD/netpbm-10.35.58/editor/pamscale.c",
                    "line": 645,
                    "event": "dead_error_line",
                    "message": "Execution cannot reach this statement \"pm_error(\"-xsize/width must...\"."
                }
            ]
        }
    ]
}
